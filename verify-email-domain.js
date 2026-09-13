// netlify/functions/verify-email-domain.js
//
// Server-side domain check for the contact form's Email field. This runs as
// a Netlify Function because DNS lookups can't be done from the browser —
// it uses Node's built-in `dns` module, so there's no third-party service,
// API key, or credential involved anywhere.
//
// What it checks: whether the domain has DNS records that mean it can
// receive mail (an MX record, or — for the small number of domains that
// route mail without one — a plain A/AAAA record).
//
// What it deliberately does NOT do: try to verify that a specific mailbox
// exists. That requires actually talking to the destination mail server
// (an SMTP handshake), which is slow, frequently blocked or rate-limited by
// providers, and unreliable enough that treating it as a hard "exists" /
// "doesn't exist" signal would end up rejecting real visitors. Confirming
// the domain itself is real is the reliable, safe stopping point.
//
// Failure handling: if the DNS lookup can't get a clear answer (a timeout
// or resolver error, as opposed to "no such domain"), this returns
// valid: true with reason "unverified" rather than blocking the visitor —
// an infrastructure hiccup on our end should never be treated as proof
// that someone's email address is fake.

const dns = require("dns").promises;

const DOMAIN_PATTERN = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)+$/i;

async function hasRecords(lookup, domain) {
  try {
    const records = await lookup(domain);
    return records && records.length > 0 ? "yes" : "no";
  } catch (err) {
    // ENOTFOUND / ENODATA mean "definitely no such records" — anything else
    // (timeouts, resolver failures, etc.) is inconclusive, not a rejection.
    if (err && (err.code === "ENOTFOUND" || err.code === "ENODATA")) return "no";
    return "unknown";
  }
}

exports.handler = async (event) => {
  const domain = ((event.queryStringParameters && event.queryStringParameters.domain) || "")
    .trim()
    .toLowerCase();

  if (!domain || domain.length > 253 || !DOMAIN_PATTERN.test(domain)) {
    return respond({ valid: false, reason: "malformed-domain" });
  }

  const mx = await hasRecords(dns.resolveMx, domain);
  if (mx === "yes") return respond({ valid: true });
  if (mx === "unknown") return respond({ valid: true, reason: "unverified" });

  const a4 = await hasRecords(dns.resolve4, domain);
  if (a4 === "yes") return respond({ valid: true });
  if (a4 === "unknown") return respond({ valid: true, reason: "unverified" });

  const a6 = await hasRecords(dns.resolve6, domain);
  if (a6 === "yes") return respond({ valid: true });
  if (a6 === "unknown") return respond({ valid: true, reason: "unverified" });

  // MX, A, and AAAA all confirmed absent — this domain cannot receive mail.
  return respond({ valid: false, reason: "no-mail-server" });
};

function respond(body) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body),
  };
}