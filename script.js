const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* ----------------------------------------------------------------------- */
/* ICONS — small hand-rolled set (stroke-based, 24x24) so no icon package  */
/* is required in this no-build-step setup.                                */
/* ----------------------------------------------------------------------- */

function Icon({ children, size = 18, className = "", strokeWidth = 2 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const Menu = (p) => <Icon {...p}><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></Icon>;
const XIcon = (p) => <Icon {...p}><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></Icon>;
const ArrowRight = (p) => <Icon {...p}><line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" /></Icon>;
const Download = (p) => <Icon {...p}><path d="M12 3v12" /><polyline points="7 11 12 16 17 11" /><line x1="5" y1="20" x2="19" y2="20" /></Icon>;
const Mail = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></Icon>;
const Phone = (p) => <Icon {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></Icon>;
const MapPin = (p) => <Icon {...p}><path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></Icon>;
const Github = (p) => <Icon {...p}><path d="M9 19c-4 1.2-4-2-6-2m12 4v-3.2c0-.9.3-1.5.7-1.8-2.4-.3-5-1.2-5-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.1a10.2 10.2 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.1-5 5.4.4.4.8 1.1.8 2.2V19" /></Icon>;
const Linkedin = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="7" y1="10" x2="7" y2="17" /><circle cx="7" cy="7" r="0.6" fill="currentColor" /><path d="M11 17v-4.5a2 2 0 0 1 4 0V17" /><line x1="11" y1="10" x2="11" y2="17" /></Icon>;
const FileText = (p) => <Icon {...p}><path d="M7 3h6l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><polyline points="13 3 13 8 18 8" /><line x1="8.5" y1="13" x2="15" y2="13" /><line x1="8.5" y1="16.5" x2="15" y2="16.5" /></Icon>;
const ChevronUp = (p) => <Icon {...p}><polyline points="6 15 12 9 18 15" /></Icon>;
const ExternalLink = (p) => <Icon {...p}><path d="M14 4h6v6" /><line x1="20" y1="4" x2="11" y2="13" /><path d="M19 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" /></Icon>;
const Code2 = (p) => <Icon {...p}><polyline points="9 8 5 12 9 16" /><polyline points="15 8 19 12 15 16" /></Icon>;
const CheckCircle2 = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><polyline points="8 12.5 11 15.5 16 9" /></Icon>;
const AlertCircle = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><line x1="12" y1="7.5" x2="12" y2="13" /><circle cx="12" cy="16.3" r="0.6" fill="currentColor" /></Icon>;
const Award = (p) => <Icon {...p}><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" /></Icon>;
const GraduationCap = (p) => <Icon {...p}><path d="M2 9l10-5 10 5-10 5-10-5z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></Icon>;
const Sparkles = (p) => <Icon {...p}><path d="M12 3v4M12 17v4M4 12h4M16 12h4M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" /></Icon>;
const ShieldCheck = (p) => <Icon {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><polyline points="9 12 11 14 15 10" /></Icon>;
const Layers = (p) => <Icon {...p}><polygon points="12 3 21 8 12 13 3 8 12 3" /><polyline points="3 14 12 19 21 14" /></Icon>;
const Terminal = (p) => <Icon {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><polyline points="7 9 10 12 7 15" /><line x1="12" y1="15" x2="16" y2="15" /></Icon>;
const Send = (p) => <Icon {...p}><line x1="4" y1="20" x2="20" y2="4" /><polygon points="20 4 14 20 11 13 4 10 20 4" /></Icon>;
const Loader2 = (p) => <Icon {...p}><path d="M12 3a9 9 0 1 0 9 9" /></Icon>;
const ChevronLeftIcon = (p) => <Icon {...p}><polyline points="15 6 9 12 15 18" /></Icon>;
const ChevronRightIcon = (p) => <Icon {...p}><polyline points="9 6 15 12 9 18" /></Icon>;
const HomeIcon = (p) => <Icon {...p}><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9" /></Icon>;
const LockIcon = (p) => <Icon {...p}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></Icon>;
const CalendarIcon = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" /></Icon>;
const ClockIcon = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></Icon>;
const ImageIcon = (p) => <Icon {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="10" r="1.5" /><path d="M21 16l-5.5-5.5L9 17" /></Icon>;
const BuildingIcon = (p) => <Icon {...p}><rect x="5" y="3" width="14" height="18" rx="1" /><line x1="9" y1="7" x2="9" y2="7.01" /><line x1="9" y1="11" x2="9" y2="11.01" /><line x1="9" y1="15" x2="9" y2="15.01" /><line x1="15" y1="7" x2="15" y2="7.01" /><line x1="15" y1="11" x2="15" y2="11.01" /><line x1="15" y1="15" x2="15" y2="15.01" /></Icon>;

/* ----------------------------------------------------------------------- */
/* DATA — kept separate from UI so content can be updated without touching */
/* component markup.                                                       */
/* ----------------------------------------------------------------------- */

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const STATS = [
  { value: "BS Computer Science", label: "Degree" },
  { value: "2022 – 2026", label: "Duration" },
  { value: "Software & Mobile App Dev", label: "Role" },
  { value: "Project Lead & Lead Developer", label: "Thesis" },
];

const ACHIEVEMENTS = [
  { title: "Graduated with Academic Distinction", detail: "Bachelor of Science in Computer Science", icon: GraduationCap },
  { title: "Consistent Dean's Lister", detail: "2nd year through 4th year", icon: Award },
  { title: "Top Dean's Lister, CS Department", detail: "AY 2023–2024, 2nd Semester", icon: Sparkles },
  { title: "Best Thesis Programmer", detail: "Mobile Application Development", icon: Code2 },
  { title: "Best Thesis Presenter", detail: "Thesis defense & presentation", icon: CheckCircle2 },
  { title: "Best Thesis in Intelligent Learning Systems", detail: "MemorAI — AI-Powered Study Companion", icon: ShieldCheck },
];

const SKILLS_DATA = [
  {
    id: "languages",
    label: "Languages",
    items: [
      { name: "Dart", note: "Primary language for Flutter applications.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
      { name: "Java", note: "Native Android & robust object-oriented programming.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Python", note: "Data processing, backend services, and AI scripting.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "JavaScript", note: "Dynamic web functionality and core logic.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "SQL", note: "Relational database querying and management.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "Kotlin", note: "Modern, safe language for Android development.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
      { name: "C#", note: "Versatile language for enterprise software.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" }
    ]
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: [
      { name: "Flutter", note: "Framework for building cross-platform mobile applications.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
      { name: "HTML", note: "Semantic and accessible web page structure.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", note: "Responsive layouts and modern web styling.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", note: "Interactive front-end functionality.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    id: "backend-db",
    label: "Backend & Database",
    items: [
      { name: "Firebase Auth", note: "Secure user authentication and identity management.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
      { name: "Firebase Realtime DB", note: "Real-time NoSQL database for synchronized application data.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
      { name: "Firebase Storage", note: "Robust object storage for user-generated content.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
      { name: "Firebase Functions", note: "Serverless backend execution for events.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
      { name: "MySQL", note: "Relational database for structured application data.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "SQLite", note: "Lightweight, embedded local database storage.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
      { name: "Google Cloud", note: "Scalable cloud infrastructure and hosting services.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" }
    ]
  },
  {
    id: "apis",
    label: "APIs",
    items: [
      { name: "Gemini API", note: "Used to integrate AI-powered features into applications.", iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/google-gemini.png" },
      { name: "Google Maps API", note: "Used for maps, location services, and location-based features.", iconUrl: "./images/google-maps.png" },
      { name: "EmailJS", note: "Client-side email routing and integration handling.", iconUrl: "./images/emailjs.png" },
      { name: "PayMongo", note: "Secure payment gateway for seamless transactions.", iconUrl: "./images/paymongo.png" }
    ]
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git", note: "Version control and collaborative development.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", note: "Repository hosting and CI/CD workflows.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Android Studio", note: "Native Android and Flutter development IDE.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
      { name: "VS Code", note: "Highly extensible, lightweight code editor.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Visual Studio", note: "Comprehensive IDE for .NET and C# development.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" },
      { name: "Eclipse", note: "Classic IDE primarily used for Java development.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" },
      { name: "ClickUp", note: "Agile project management and task tracking.", iconUrl: "https://cdn.simpleicons.org/clickup/7B68EE" }
    ]
  },
  {
    id: "design",
    label: "Design",
    items: [
      { name: "Figma", note: "UI/UX design, wireframing, and prototyping.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Adobe Photoshop", note: "Image editing and visual asset creation.", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
      { name: "Google Workspace", note: "Professional team collaboration and documentation.", iconUrl: "./images/google.jpg" }
    ]
  }
];

const EXPERIENCE = [
  {
    id: "shapetech",
    role: "Mobile Application Developer Intern",
    org: "ShapeTech I.T. Services",
    period: "February 2026 – May 2026",
    points: [
      "Developed a mobile application end-to-end based on company and client requirements.",
      "Implemented secure user authentication and role-based access control across the app's three user roles.",
      "Integrated a real-time database to keep bookings, jobs, and account data in sync across every role.",
      "Integrated the Google Maps API for live location tracking and in-app navigation.",
      "Integrated in-app payment functionality for completed bookings.",
      "Handled day-to-day coding, database management, testing, debugging, and troubleshooting.",
      "Collaborated closely with the development team to refine features and improve the overall user experience.",
      "Contributed to the successful completion and official turnover of the project to the client.",
    ],
    highlight:
      "A three-role home cleaning service mobile application with separate Client, Cleaner, and Admin experiences. Built as part of a two-person intern team while independently learning Flutter and Dart on the job, implementing real-world features, and delivering a fully production-ready application within the internship period.",
    tags: ["Flutter", "Dart", "Firebase Auth", "Realtime Database", "Storage", "Google Maps API", "Paymongo", "EmailJS", "Gemini API", "Android Studio", "Role-Based Access"],

    // Showcase for the 3D phone carousel on the right side of the Experience
    // card. The actual application UI is company-owned/confidential (see
    // CONFIDENTIAL_MESSAGES below), so each slide renders a ConfidentialScreen
    // placeholder labeled with the real feature it represents, instead of an
    // actual screenshot. Mirrors the PROJECTS_DATA shape so it can reuse
    // ProjectMockups / PhoneCarousel / PortalSwitcher as-is.
    appName: "Home CService App",
    AppIcon: HomeIcon,
    confidential: true,
    portals: [
      {
        id: "client",
        label: "Client",
        media: [
          { type: "confidential", label: "Booking" },
          { type: "confidential", label: "Services" },
          { type: "confidential", label: "Payment" },
        ],
      },
      {
        id: "cleaner",
        label: "Cleaner",
        media: [
          { type: "confidential", label: "Schedule" },
          { type: "confidential", label: "Booking" },
          { type: "confidential", label: "Earning" },
        ],
      },
      {
        id: "admin",
        label: "Admin",
        media: [
          { type: "confidential", label: "Dashboard" },
          { type: "confidential", label: "User Management" },
          { type: "confidential", label: "Financials" },
        ],
      },
    ],
  },
];

// Cycled by ConfidentialTypewriter near the phone showcase. Keep each entry
// a single, complete sentence — the full list is also exposed verbatim to
// screen readers via a visually-hidden node, so wording here is user-facing
// copy, not decoration.
const CONFIDENTIAL_MESSAGES = [
  "CONFIDENTIAL — Project screens cannot be publicly displayed due to company confidentiality.",
  "This application was developed during my internship and contains company-owned information.",
  "Actual project screens are intentionally hidden to respect company confidentiality.",
];

const HERO_LINES = [
  "const developer = {",
  '  role: "Software & Mobile Developer",',
  '  languages: ["Dart", "Kotlin", "Java", "Python", "C#", "SQL", "JS"],',
  '  frameworks: ["Flutter", "Firebase", "MySQL", "APIs"],',
  '  tools: ["Git", "GitHub", "VS Code", "Android Studio"],',
  '  mindset: "Always learning, always building",',
  "};",
];

// Array containing project metadata, descriptions, and UI configurations
// Array containing project metadata, descriptions, and UI configurations
const PROJECTS_DATA = [
  {
    id: "memorai",
    role: "Project Lead & Lead Developer",
    year: "2025 – 2026",
    title: "MemorAI",
    tagline: "AI-Powered Study Companion",
    appLogo: "images/memorai-logo.png",
    
    // Updated description integrating full app scope
    description: "An AI-powered mobile learning application that automatically converts uploaded study materials, such as PDFs, DOCX files, images, slides, and video lectures, into ready-to-study flashcard decks. It also allows users to manually create their own flashcards, organize decks by subject or category, and share study decks with other users, making the learning and review process more flexible and collaborative.",

    // Key features and highlights formatted as JavaScript strings
    points: [
      "AI-Powered Content Processing — Automatically analyzes uploaded learning materials and generates relevant flashcards.",
      "Multiple Learning Material Formats — Import PDFs, DOCX files, images, slides, and video lectures, or scan text directly.",
      "Manual Flashcard Creation — Create and customize flashcards manually for personalized study materials.",
      "Interactive Flashcard Decks — Convert learning resources into organized, ready-to-study flashcard decks.",
      "Subject & Category Organization — Organize flashcard decks by subject or category for easier access and management.",
      "Progress Tracking — Monitor learning progress for each flashcard deck.",
      "Deck Sharing — Share flashcard decks with other users, allowing them to access and study shared learning materials."
    ],
    tags: ["Kotlin", "Python", "Firebase", "Mobile App", "AI-Powered", "Gemini API", "Realtime Database", "Authentication", "Android Studio", "VS Code"],
   
    AppIcon: Layers,

    // Mobile mockup media — one entry per phone in the 3D carousel.
    // Each entry can be:
    //   { type: "image", src: "images/....png", alt: "..." }
    //   { type: "video", src: "images/....mp4" }
    //   { type: "content", content: <JSX /> }  (custom in-app screen mockup)
    // Add or remove entries here and the carousel automatically adds/removes phones.
    media: [
  { 
    type: "video", src: "videos/memorai-splash.mp4", 
  },
  { 
    type: "image", src: "images/memorai-login.jpg" 
  },
  { 
    type: "video", src: "videos/memorai-home.mp4", 
  },
  { 
    type: "video", src: "videos/memorai-progress.mp4", 
  },
  { 
    type: "video", src: "videos/memorai-add-deck.mp4", 
  },
  { 
    type: "video", src: "videos/memorai-decks.mp4", 
  },
  { 
    type: "video", src: "videos/memorai-join-deck.mp4", 
  },
  { 
    type: "video", src: "videos/memorai-profile.mp4", 
  },
],
  },
  {
    id: "agenda",
    role: "Full-Stack Mobile Developer & UI/UX Designer",
    year: "2025",
    title: "Agenda",
    tagline: "Time Management & To-Do List Mobile Application",
    appLogo: "images/agenda-logo.png", // Path to Agenda logo/icon image
    
    // Merged description: Combines overarching app purpose with system architecture
    description: "Developed a cross-platform productivity application that helps students organize and manage their tasks using categories, deadlines, and priority levels. The system features two centralized portals to help users set goals, track progress, and improve overall time management.",
    
    // Consolidated points: Integrated portal details with UI/UX and architecture features
    points: [
      "Student Portal — for task management, prioritization, goal setting, deadlines, and progress tracking.",
      "Teacher Portal — for managing classes, sharing learning materials, distributing assignments, and communicating academic requirements.",
      "Designed intuitive UI/UX flows for goal setting and task progress tracking.",
      "Built the application using a hybrid offline-online data architecture to provide reliable local data access while supporting cloud-based synchronization and storage."
    ],
    tags: ["Java", "Firebase", "Realtime Database", "Authentication", "SQLite", "Figma"],
    appName: "Agenda",
    AppIcon: CheckCircle2,

    // Mobile mockup media — Agenda has two distinct user roles, so its
    // screens are grouped into "portals" instead of one flat media list.
    // The Student/Teacher switcher (rendered above the carousel) reads
    // this array; each portal can hold as many images/videos as you like —
    // only 3 phones are ever visible at once, the rest page in as the
    // carousel is browsed. Feel free to move items between portals or add
    // more; this is just an example grouping based on filenames.
    //   { type: "image", src: "images/....jpg", alt: "..." }
    //   { type: "video", src: "videos/....mp4" }
    //   { type: "content", content: <JSX /> }
    portals: [
      {
        id: "student",
        label: "Student Portal",
        media: [
          { type: "video", src: "videos/agenda-splash.mp4", },
          { type: "image", src: "images/agenda-student-login.jpg" },
          { type: "video", src: "videos/agenda-home.mp4" },
          { type: "video", src: "videos/agenda-calendar.mp4" },
          { type: "video", src: "videos/agenda-addtask.mp4" },
          { type: "video", src: "videos/agenda-list.mp4" },
          { type: "video", src: "videos/agenda-join-classes.mp4" },
          { type: "video", src: "videos/agenda-profile.mp4" },
        ],
      },
      {
        id: "teacher",
        label: "Teacher Portal",
        media: [
          { type: "video", src: "videos/agenda-splash.mp4" },
          { type: "image", src: "images/agenda-teacher-login.jpg" },
          { type: "video", src: "videos/agenda-home-teacher.mp4" },
          { type: "video", src: "videos/agenda-addtask-teacher.mp4" },
          { type: "video", src: "videos/agenda-list-teacher.mp4" },
          { type: "video", src: "videos/agenda-addsection.mp4" },
          { type: "video", src: "videos/agenda-section.mp4" },
          { type: "video", src: "videos/agenda-profile-teacher.mp4" },
        ],
      },
    ],
  },
];

/* ----------------------------------------------------------------------- */
/* ACHIEVEMENTS & CERTIFICATIONS DATA                                      */
/* Everything here is data — to add a new award, certificate, seminar, or  */
/* tech event later, just push another object into ACHIEVEMENTS_DATA. Any  */
/* field left out (date, time, location, description, images, link, etc.) */
/* is simply hidden by the UI instead of showing an empty placeholder.     */
/* ----------------------------------------------------------------------- */

const ACHIEVEMENT_CATEGORIES = [
  { id: "awards", label: "Achievements & Awards", icon: Award },
  { id: "certificates", label: "Certificates", icon: ShieldCheck },
  { id: "seminars", label: "Seminars & Webinars", icon: Terminal },
  { id: "events", label: "Technology Events", icon: Sparkles },
];

const ACHIEVEMENTS_DATA = [
  {
    id: "memorai-thesis-awards",
    category: "awards",
    title: "3 Thesis Awards — MemorAI",
    organization: "Kolehiyo ng Lungsod ng Lipa — College of Computer Studies",
    year: "2026",
    description:
      "Recognized with three separate thesis awards for MemorAI, an AI-powered study companion, in recognition of the project's development and presentation.",
    details: ["Best Thesis Programmer", "Best Thesis in Intelligent Learning Systems", "Best Thesis Presenter"],
    icon: Award,
    // Add, remove, or reorder photos freely — award certificates, the
    // thesis presentation, the recognition ceremony, group shots, etc.
    // The carousel automatically adds a browsable slide for each one.
    images: [
      { src: "images/achievements/best-thesis-programmer.jpg", alt: "3 Thesis Awards — MemorAI, award certificate" },
      { src: "images/achievements/best-thesis-in-intelligent-learning-systems.jpg", alt: "3 Thesis Awards — MemorAI, thesis presentation" },
      { src: "images/achievements/best-thesis-presenter.jpg", alt: "3 Thesis Awards — MemorAI, awarding ceremony" },
    ],
  },
  {
    id: "academic-distinction",
    category: "awards",
    title: "Academic Distinction Awardee",
    organization: "Kolehiyo ng Lungsod ng Lipa",
    year: "2022 – 2026",
    description:
      "Graduated with academic distinction after maintaining a consistent Dean's Lister standing throughout the BS Computer Science program.",
    details: ["Rank 1 Dean's Lister — 2nd Year, 2nd Sem", "Consistent Dean's Lister from 2nd Year through 4th Year"],
    icon: GraduationCap,
    // Same pattern as above — academic award certificate, Dean's List
    // recognition, awarding ceremony photos, etc. Add/replace freely.
    images: [
      { src: "images/achievements/academic-distinction.jpg", alt: "Academic Distinction Awardee, award certificate" },
      { src: "images/achievements/academic-distinction-solo.jpg", alt: "Academic Distinction Awardee, awarding ceremony" },
    ],
  },
  {
    id: "shapetech-transfer-of-technology",
    category: "certificates",
    title: "Certificate of Transfer of Technology",
    organization: "ShapeTech I.T. Services",
    year: "2026",
    description:
      "Awarded following the internship for successfully transferring the completed mobile application and its underlying technology to the client.",
    details: ["Intern — ShapeTech I.T. Services"],
    icon: ShieldCheck,
    // Add the certificate photo/scan here — the card and gallery show a
    // polished placeholder until this file exists.
    images: [{ src: "images/achievements/shapetech-transfer-of-technology-certificate.jpg", alt: "Certificate of Transfer of Technology, ShapeTech I.T. Services" }],
  },
  {
    id: "datadog-bedrock-webinar",
    category: "seminars",
    title: "Building Observable AI Agents with Amazon Bedrock and Datadog",
    organization: "Datadog",
    date: "March 12, 2026",
    time: "11:00 AM – 12:30 PM",
    location: "ShapeTech Office — Zoom Meeting",
    description: "Attended an online Datadog Zoom webinar on building and observing AI agents at scale.",
    details: [
      "Learned about AI agent scalability challenges.",
      "Learned how observability can be used when building AI agents.",
      "Gained insights into tracing and tracking data to monitor and improve AI performance.",
      "Learned technical concepts including AgentCore Runtime and Strands Agents.",
    ],
    icon: Terminal,
    images: [{ src: "images/achievements/datadog-bedrock-webinar.png", alt: "Building Observable AI Agents with Amazon Bedrock and Datadog webinar" }],
  },
  {
    id: "odoo-business-showcase",
    category: "seminars",
    title: "Odoo Business Showcase in ERP for Constructions",
    organization: "Odoo",
    date: "March 10, 2026",
    time: "12:30 PM – 5:00 PM",
    location: "Seda Hotel, Evozone Avenue, Nuvali Boulevard, Don Jose, Sta. Rosa, Laguna",
    description: "Attended the Odoo presentation and seminar on ERP solutions for the construction industry.",
    details: [
      "Participated in discussions and panel sessions.",
      "Learned from industry professionals about real-world Odoo implementations.",
      "Gained insights into ERP solutions and business process automation.",
      "Explored potential applications of ERP systems for future software solutions and integrations.",
      "Participated in indoor and outdoor group activities and photo sessions.",
    ],
    icon: Layers,
    images: [
      { src: "images/achievements/odoo-business-showcase.jpg", alt: "Odoo Business Showcase in ERP for Constructions" },
      { src: "images/achievements/odoo-business-showcase-2.png", alt: "Odoo Business Showcase in ERP for Constructions" }
    ],
  },
  {
    id: "philippine-tech-show-2026",
    category: "events",
    title: "Philippine Tech Show 2026: Level Up",
    organization: "SMX Convention Center Manila",
    date: "March 25, 2026",
    time: "2:00 PM – 5:00 PM",
    location: "SMX Convention Center Manila, Mall of Asia Complex, Pasay City",
    description: "Explored exhibition booths, digital signage, and AI-driven technology platforms at the Philippine Tech Show.",
    details: [
      "Visited the SMX Convention Center event venue.",
      "Explored digital signage and the main stage.",
      "Visited various technology exhibition booths.",
      "Examined fiber-optic cables and connectivity hardware.",
      "Explored server racks and AI-driven technology platforms.",
      "Interacted with exhibitors and technology representatives.",
      "Participated in group photography at the event entrance.",
    ],
    icon: Sparkles,
    images: [
      { src: "images/achievements/philippine-tech-show-2026-1.jpg", alt: "Philippine Tech Show 2026: Level Up — exhibition floor" },
      { src: "images/achievements/philippine-tech-show-2026-2.jpg", alt: "Philippine Tech Show 2026: Level Up — group photo" },
      { src: "images/achievements/philippine-tech-show-2026-3.jpg", alt: "Philippine Tech Show 2026: Level Up — showing" },
      { src: "images/achievements/philippine-tech-show-2026-4.jpg", alt: "Philippine Tech Show 2026: Level Up — showing" },
    ],
  },
];

// Normalizes every possible "picture" field an achievement item can carry
// (images[], image, certificate) into one flat array of { src, alt } —
// components only ever need to read this, never the raw fields.
function getAchievementImages(item) {
  const imgs = [];
  if (Array.isArray(item.images)) imgs.push(...item.images);
  if (item.image) imgs.push({ src: item.image, alt: item.title });
  if (item.certificate) imgs.push({ src: item.certificate, alt: `${item.title} certificate` });
  return imgs;
}

/* ----------------------------------------------------------------------- */
/* UTIL: reduced-motion aware reveal-on-scroll hook                        */
/* ----------------------------------------------------------------------- */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, []);
  return reduced;
}

function useReveal(reduced) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(reduced);
  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);
  return [ref, visible];
}

function Reveal({ as: Tag = "div", delay = 0, className = "", children, reduced, ...rest }) {
  const [ref, visible] = useReveal(reduced);
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: reduced ? "0ms" : `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------------------- */
/* SMALL REUSABLE PIECES                                                   */
/* ----------------------------------------------------------------------- */

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </div>
  );
}

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function PrimaryButton({ children, href, onClick, icon: IconComp = ArrowRight, type = "button" }) {
  const content = (
    <>
      <span>{children}</span>
      <IconComp size={16} strokeWidth={2.25} />
    </>
  );
  if (href) {
    return (
      <a href={href} className="btn btn-primary" onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className="btn btn-primary" onClick={onClick}>
      {content}
    </button>
  );
}

function GhostButton({ children, href, onClick }) {
  return (
    <a href={href} className="btn btn-ghost" onClick={onClick}>
      {children}
    </a>
  );
}

/* ----------------------------------------------------------------------- */
/* CURSOR GLOW + SCROLL PROGRESS + BACK TO TOP                             */
/* ----------------------------------------------------------------------- */

function CursorGlow({ reduced }) {
  const glowRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setPct(height > 0 ? (scrollTop / height) * 100 : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div className="scroll-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`back-to-top ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <ChevronUp size={18} />
    </button>
  );
}

/* ----------------------------------------------------------------------- */
/* NAVBAR                                                                   */
/* ----------------------------------------------------------------------- */

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile drawer is open, and allow Escape to close it.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleNav = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-inner" aria-label="Primary">
        <a href="#home" className="brand" onClick={handleNav("home")}>
          <img src="images/profile-logo.png" alt="CR Logo" className="brand-mark" />
          <span className="brand-name">Christian&nbsp;Reyes</span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={handleNav(link.id)} className={activeSection === link.id ? "active" : ""}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <XIcon size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`nav-backdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className={`nav-mobile ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={handleNav(link.id)} className={activeSection === link.id ? "active" : ""}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------------- */
/* HERO                                                                     */
/* ----------------------------------------------------------------------- */

function highlightCode(line) {
  let safe = line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  safe = safe.replace(/"([^"]*)"/g, '<span class="tok-string">"$1"</span>');
  safe = safe.replace(/\b(const)\b/g, '<span class="tok-keyword">$1</span>');
  safe = safe.replace(/\b(role|languages|frameworks|tools|mindset)\b(?=:)/g, '<span class="tok-key">$1</span>');
  safe = safe.replace(/\b(developer)\b/g, '<span class="tok-var">$1</span>');
  return safe;
}

function HeroTerminal({ reduced }) {
  const [typedLines, setTypedLines] = useState(reduced ? HERO_LINES : []);
  const [currentChars, setCurrentChars] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled) return;
      if (lineIndex >= HERO_LINES.length) return;
      const line = HERO_LINES[lineIndex];
      if (charIndex <= line.length) {
        setCurrentChars(charIndex);
        charIndex += 1;
        setTimeout(typeNext, 18 + Math.random() * 22);
      } else {
        setTypedLines((prev) => [...prev, line]);
        lineIndex += 1;
        charIndex = 0;
        setCurrentChars(0);
        setTimeout(typeNext, 220);
      }
    };
    const start = setTimeout(typeNext, 500);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [reduced]);

  const inProgressLine = !reduced && typedLines.length < HERO_LINES.length ? HERO_LINES[typedLines.length].slice(0, currentChars) : null;

  return (
    <div className="terminal" role="img" aria-label="Code editor showing a developer profile object">
      <div className="terminal-titlebar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="terminal-filename">
          <Terminal size={13} /> profile.ts
        </span>
      </div>
      <div className="terminal-body">
        {typedLines.map((line, i) => (
          <div key={i} className="terminal-line" dangerouslySetInnerHTML={{ __html: highlightCode(line) || "&nbsp;" }} />
        ))}
        {inProgressLine !== null && (
          <div className="terminal-line">
            <span dangerouslySetInnerHTML={{ __html: highlightCode(inProgressLine) }} />
            <span className="caret" aria-hidden="true" />
          </div>
        )}
        {reduced && <div className="terminal-line">&nbsp;</div>}
      </div>
    </div>
  );
}

function ResumeLink() {
  const [status, setStatus] = useState("idle");
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    if (status !== "idle") return;
    setStatus("downloading");
    
    setTimeout(() => {
      setStatus("success");
      setShowToast(true);
      
      setTimeout(() => {
        setShowToast(false);
        setTimeout(() => setStatus("idle"), 400);
      }, 3500);
    }, 1200);
  };

  return (
    <span className="resume-link-inline">
      <a
        href="files/Christian_Reyes_Resume.pdf" 
        download="Christian_Reyes_Resume.pdf"
        className={`resume-link ${status}`}
        onClick={handleDownload}
      >
        <div className="resume-icon-wrapper">
          {status === "idle" && <Download size={16} />}
          {status === "downloading" && <Loader2 size={16} className="spin" />}
          {status === "success" && <CheckCircle2 size={16} />}
        </div>
        <span className="resume-text">
          {status === "idle" && "Download Resume"}
          {status === "downloading" && "Downloading..."}
          {status === "success" && "Downloaded!"}
        </span>
      </a>
      
      <div className={`download-toast ${showToast ? 'show' : ''}`} aria-hidden={!showToast}>
        <CheckCircle2 size={16} className="toast-icon" /> 
        Resume downloaded successfully
      </div>
    </span>
  );
}

function Hero({ reduced }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid-layer" />
        <div className="glow glow-a" />
        <div className="glow glow-b" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal reduced={reduced} className="hero-kicker">
            <span className="kicker-dot" aria-hidden="true" /> Software & Mobile Application Development
          </Reveal>

          <Reveal reduced={reduced} delay={80} as="h1" className="hero-title">
            Hi, I'm <span className="accent-text">Christian Reyes.</span>
          </Reveal>

          <Reveal reduced={reduced} delay={160} as="p" className="hero-subtitle">
            Computer Science Graduate &amp; Aspiring Software 
            & Mobile Developer
          </Reveal>

          <Reveal reduced={reduced} delay={220} as="p" className="hero-description">
            Passionate about building practical software solutions, mobile applications, and intuitive digital experiences.
          </Reveal>

          <Reveal reduced={reduced} delay={300} className="hero-actions">
            <PrimaryButton
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Projects
            </PrimaryButton>
            <GhostButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </GhostButton>
          </Reveal>

          <Reveal reduced={reduced} delay={360} className="resume-link-wrap">
            <ResumeLink />
          </Reveal>
        </div>

        <Reveal reduced={reduced} delay={200} className="hero-visual">
          <HeroTerminal reduced={reduced} />
        </Reveal>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* ABOUT + EDUCATION/ACHIEVEMENTS                                          */
/* ----------------------------------------------------------------------- */

function About({ reduced }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="About" title="Who I am" description="A quick look at my background, education, and what I'm focused on right now." />

        <div className="about-grid">
          <Reveal reduced={reduced} className="about-copy">
            <p>
              Christian M. Reyes is a BS Computer Science graduate from Kolehiyo ng
              Lungsod ng Lipa with hands-on experience in mobile application
              development. During his internship at ShapeTech I.T. Services, he worked
              on mobile applications involving authentication, role-based access
              control, real-time database integration, and Google Maps-based location
              tracking.
            </p>

            <p>
              During his OJT, his team was the only team in the batch to successfully complete the
              project, and production-ready application that was officially turned over to the
              company. He also learned and applied new technologies independently while
              working on the project, gaining valuable experience in adapting to
              real-world development requirements.
            </p>

            <p>
              He also served as Project Lead and Lead Developer for his thesis, 
              <strong> MemorAI — AI-Powered Study Companion</strong>, where he helped lead
              the project from its initial concept and planning through development,
              testing, and final presentation.
            </p>

            <div className="currently-card">
              <span className="currently-dot" />
              <div>
                <strong>Open to opportunities</strong>
                <p>
                  Software Development &bull; Mobile Development &bull; Web Development
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal reduced={reduced} delay={120} className="profile-card">
            <div className="profile-card-glow" aria-hidden="true" />
            
            <div className="profile-image-container">
               <img 
                 src="images/profile-logo.png" 
                 alt="Christian M. Reyes" 
                 className="profile-avatar-img clickable-avatar"
                 onClick={() => setIsExpanded(true)}
                 title="Click to enlarge"
               />
            </div>

            <h3>Christian M. Reyes</h3>
            <div className="profile-role-row">
              <p className="profile-role">Computer Science Graduate</p>
              <Badge>Open to work</Badge>
            </div>
            <div className="profile-stats">
              {STATS.map((s) => (
                <div key={s.label} className="profile-stat">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="education-block">
          <Reveal reduced={reduced} className="education-card">
            <GraduationCap size={22} className="edu-icon" />
            <div>
              <h3>Bachelor of Science in Computer Science</h3>
              <p>Kolehiyo ng Lungsod ng Lipa &middot; 2022 &ndash; 2026</p>
            </div>
          </Reveal>

          <div className="achievement-grid">
            {ACHIEVEMENTS.map((a, i) => {
              const IconComp = a.icon;
              return (
                <Reveal reduced={reduced} delay={i * 70} key={a.title} className="achievement-card">
                  <span className="achievement-icon-wrap">
                    <IconComp size={16} className="achievement-icon" />
                  </span>
                  <div>
                    <h4>{a.title}</h4>
                    <p>{a.detail}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="lightbox-overlay" onClick={() => setIsExpanded(false)}>
          <button className="lightbox-close" onClick={() => setIsExpanded(false)} aria-label="Close image">
            <XIcon size={28} />
          </button>
          <img 
            src="images/profile-logo.png" 
            alt="Christian M. Reyes Expanded" 
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* SKILLS                                                                   */
/* ----------------------------------------------------------------------- */

function SkillCard({ skill }) {
  return (
    <div className="skill-card" tabIndex={0}>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-note">{skill.note}</span>
    </div>
  );
}

function Skills({ reduced }) {
  const [activeTab, setActiveTab] = useState(SKILLS_DATA[0].id);
  const activeCategory = SKILLS_DATA.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Skills & Arsenal"
          title="My Technical Stack"
          description="A showcase of my technical capabilities and hands-on experience building real-world applications. Driven by a passion for continuous learning, I quickly adapt to new tools and frameworks to bridge the gap between intuitive user interfaces and robust backend systems."
        />

        <div className="skills-container">
          <div className="skills-tabs" role="tablist" aria-label="Skill categories">
            {SKILLS_DATA.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeTab === cat.id}
                className={`skill-tab-btn ${activeTab === cat.id ? "active" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="skills-grid-modern" key={activeTab}>
            {activeCategory.items.map((skill, index) => {
              const Fallback = skill.fallback || Code2;
              return (
                <Reveal 
                  reduced={reduced} 
                  delay={index * 60} 
                  key={skill.name} 
                  className="skill-card-modern"
                  tabIndex={0}
                >
                  <div className="skill-icon-wrapper">
                    {skill.iconUrl ? (
                      <img src={skill.iconUrl} alt={`${skill.name} icon`} className="skill-icon-img" loading="lazy" />
                    ) : (
                      <Fallback size={22} className="skill-icon-fallback" />
                    )}
                  </div>
                  <div className="skill-content">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-note">{skill.note}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Mobile-only: a seamless looping marquee (hidden on larger screens via CSS)
              so skill labels never get clipped on narrow phone widths. The item list
              is duplicated once so the loop restarts with no visible jump. */}
          <div className="skills-marquee" key={`${activeTab}-marquee`}>
            <div className="skills-marquee-track">
              {[...activeCategory.items, ...activeCategory.items].map((skill, index) => {
                const Fallback = skill.fallback || Code2;
                const isDuplicate = index >= activeCategory.items.length;
                return (
                  <div
                    className="skill-card-modern marquee-item"
                    key={`${skill.name}-${index}`}
                    aria-hidden={isDuplicate}
                  >
                    <div className="skill-icon-wrapper">
                      {skill.iconUrl ? (
                        <img src={skill.iconUrl} alt="" className="skill-icon-img" loading="lazy" />
                      ) : (
                        <Fallback size={22} className="skill-icon-fallback" />
                      )}
                    </div>
                    <div className="skill-content">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-note">{skill.note}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* PROJECTS                                                                 */
/* ----------------------------------------------------------------------- */

/* ----------------------------------------------------------------------- */
/* PHONE MOCKUP 3D CAROUSEL                                                 */
/* Renders one phone-mockup per media item and arranges them in a 3D       */
/* perspective stack: the active phone sits front-and-center, the rest     */
/* fan out behind/to the sides in depth order. Supports images, videos,    */
/* or custom JSX content inside each phone screen.                         */
/* ----------------------------------------------------------------------- */

function ConfidentialScreen({ label }) {
  const description = label
    ? `${label} screen — not publicly shown due to company confidentiality`
    : "Screen not publicly shown due to company confidentiality";
  return (
    <div className="confidential-screen" role="img" aria-label={description}>
      <div className="confidential-skeleton" aria-hidden="true">
        <div className="confidential-skeleton-bar" />
        <div className="confidential-skeleton-row" />
        <div className="confidential-skeleton-row short" />
        <div className="confidential-skeleton-card" />
        <div className="confidential-skeleton-card" />
        <div className="confidential-skeleton-nav">
          <span /><span /><span /><span />
        </div>
      </div>
      <div className="confidential-overlay" aria-hidden="true" />
      <div className="confidential-content" aria-hidden="true">
        <div className="confidential-lock-ring">
          <LockIcon size={16} strokeWidth={2.25} />
        </div>
        <span className="confidential-tag">Confidential</span>
        {label && <span className="confidential-feature">{label}</span>}
      </div>
    </div>
  );
}

function MediaSlide({ item, active }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (active) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  }, [active]);

  if (!item) return null;

  if (item.type === "confidential") {
    return <ConfidentialScreen label={item.label} />;
  }

  if (item.type === "image") {
    return <img src={item.src} alt={item.alt || ""} className="phone-media phone-media-image" draggable="false" />;
  }

  if (item.type === "video") {
    return (
      <video
        ref={videoRef}
        src={item.src}
        className="phone-media phone-media-video"
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return item.content || null;
}

function PhoneCarousel({ media, appName, appLogo, showLogo, AppIcon, onLogoError, reduced }) {
  const items = media && media.length > 0 ? media : [{ type: "content", content: null }];
  const count = items.length;
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchRef = useRef({ x: 0, tracking: false });

  // Keep the active index valid if the media array length ever changes.
  useEffect(() => {
    setActive((a) => (a >= count ? 0 : a));
  }, [count]);

  // Use functional state updates to keep callback references stable for the interval timer
  const goTo = useCallback((i) => setActive(((i % count) + count) % count), [count]);
  const goNext = useCallback(() => setActive((prev) => (((prev + 1) % count) + count) % count), [count]);
  const goPrev = useCallback(() => setActive((prev) => (((prev - 1) % count) + count) % count), [count]);

  // Auto-slide effect — continuously loops forward, but pauses while the
  // user is hovering, focused, or touching the carousel, and while the
  // person has requested reduced motion.
  useEffect(() => {
    if (isPaused || reduced || count <= 1) return;
    const intervalId = setInterval(goNext, 4500);
    return () => clearInterval(intervalId);
  }, [isPaused, reduced, count, goNext]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchRef.current = { x: e.touches[0].clientX, tracking: true };
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (!touchRef.current.tracking) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    touchRef.current.tracking = false;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) goNext(); else goPrev();
  };

  const MAX_VISIBLE_DEPTH = 1; // only the active phone + one on each side are ever visible

  return (
    <div
      className="phone-carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${appName} screens`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="phone-carousel-stage"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, i) => {
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;

          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          const clamped = Math.max(-MAX_VISIBLE_DEPTH, Math.min(MAX_VISIBLE_DEPTH, offset));
          const hidden = absOffset > MAX_VISIBLE_DEPTH;
          const isMedia = item.type === "image" || item.type === "video";
          const isConfidential = item.type === "confidential";

          const scale = isActive ? 1 : Math.max(0.68, 1 - absOffset * 0.16);
          const opacity = hidden ? 0 : Math.max(0.35, 1 - absOffset * 0.3);
          const zIndex = 100 - absOffset;

          const transform = [
            "translate(-50%, -50%)",
            `translateX(calc(var(--carousel-offset-x) * ${clamped}))`,
            `translateZ(calc(var(--carousel-offset-z) * ${-absOffset}))`,
            `rotateY(calc(var(--carousel-rotate-y) * ${-clamped}))`,
            `scale(${scale})`,
          ].join(" ");

          return (
            <div
              key={i}
              className={`phone-mockup phone-carousel-item ${isActive ? "is-active" : ""}`}
              style={{ transform, opacity, zIndex, pointerEvents: hidden ? "none" : "auto" }}
              onClick={() => !isActive && goTo(i)}
              role="group"
              aria-roledescription="slide"
              aria-label={`Screen ${i + 1} of ${count}`}
              aria-hidden={!isActive}
            >
              <div className="phone-notch" />
              <div className="phone-screen">
                {!isMedia && (
                  <div className="phone-app-bar">
                    {showLogo ? (
                      <img src={appLogo} alt="" className="phone-app-logo" onError={onLogoError} />
                    ) : (
                      <AppIcon size={14} />
                    )}
                    <span>{appName}</span>
                  </div>
                )}
                <div className={`phone-screen-body ${isMedia ? "has-media" : ""} ${isConfidential ? "is-confidential" : ""}`}>
                  <MediaSlide item={item} active={isActive} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <div className="phone-carousel-controls">
          <button type="button" className="carousel-btn" onClick={goPrev} aria-label="Previous screen">
            <ChevronLeftIcon size={18} />
          </button>
          <div className="carousel-dots">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot ${i === active ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Show screen ${i + 1}`}
                aria-current={i === active}
              />
            ))}
          </div>
          <button type="button" className="carousel-btn" onClick={goNext} aria-label="Next screen">
            <ChevronRightIcon size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* PORTAL SWITCHER                                                         */
/* Segmented control used when a project defines multiple "portals"        */
/* (e.g. Student Portal vs Teacher Portal). Selecting a portal swaps the   */
/* media shown in the phone carousel with a smooth 3D fade/slide transition.*/
/* ----------------------------------------------------------------------- */

function PortalSwitcher({ portals, activeIndex, onSelect }) {
  return (
    <div className="portal-switcher" role="tablist" aria-label="Select portal view">
      <div
        className="portal-switcher-indicator"
        style={{ width: `${100 / portals.length}%`, transform: `translateX(${activeIndex * 100}%)` }}
      />
      {portals.map((portal, i) => (
        <button
          key={portal.id}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          className={`portal-switcher-btn ${i === activeIndex ? "active" : ""}`}
          onClick={() => onSelect(i)}
        >
          {portal.label}
        </button>
      ))}
    </div>
  );
}

function ProjectMockups({ project, showLogo, AppIcon, onLogoError, reduced }) {
  const hasPortals = Array.isArray(project.portals) && project.portals.length > 0;
  // portalIndex drives the tab UI (indicator + active state) and updates the
  // instant a tab is clicked, so the button always feels responsive.
  // displayIndex drives which portal's media is actually rendered, and lags
  // behind portalIndex by one short crossfade so the swap never flickers.
  const [portalIndex, setPortalIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const swapTimeoutRef = useRef(null);

  useEffect(() => () => {
    if (swapTimeoutRef.current) clearTimeout(swapTimeoutRef.current);
  }, []);

  const selectPortal = (i) => {
    if (i === portalIndex) return;
    setPortalIndex(i); // tab + indicator respond immediately, every click

    if (reduced) {
      setDisplayIndex(i);
      return;
    }

    setFading(true);
    if (swapTimeoutRef.current) clearTimeout(swapTimeoutRef.current);
    swapTimeoutRef.current = setTimeout(() => {
      setDisplayIndex(i);
      // Let the new frame paint before fading back in so the crossfade
      // never skips, even on a slower device.
      requestAnimationFrame(() => setFading(false));
    }, 130);
  };

  const activePortal = hasPortals ? project.portals[displayIndex] : null;
  const media = hasPortals ? activePortal.media : project.media;
  const carouselKey = hasPortals ? activePortal.id : project.id;

  return (
    <div className="project-mockups">
      {hasPortals && (
        <PortalSwitcher
          portals={project.portals}
          activeIndex={portalIndex}
          onSelect={selectPortal}
        />
      )}
      <div className={`portal-carousel-wrap ${fading ? "is-switching" : ""}`}>
        <PhoneCarousel
          key={carouselKey}
          media={media}
          appName={project.appName}
          appLogo={project.appLogo}
          showLogo={showLogo}
          AppIcon={AppIcon}
          onLogoError={onLogoError}
          reduced={reduced}
        />
      </div>
    </div>
  );
}


function ProjectCard({ project, reduced }) {
  const cardRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  const handleMove = useCallback(
    (e) => {
      if (reduced || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    },
    [reduced]
  );

  const handleLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  }, []);

  const AppIcon = project.AppIcon;
  const showLogo = project.appLogo && !imgError;

  return (
    <Reveal reduced={reduced} as="article" className="project-card">
      <div ref={cardRef} className="project-tilt" onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <div className="project-visual">
          <ProjectMockups
            project={project}
            showLogo={showLogo}
            AppIcon={AppIcon}
            onLogoError={() => setImgError(true)}
            reduced={reduced}
          />
        </div>

        <div className="project-info">
          <div className="project-meta-row">
            <span className="project-role">{project.role}</span>
            <span className="project-year">{project.year}</span>
          </div>
          
          <div className="project-title-wrap">
            {/* Added logo-${project.id} for targeted styling */}
            <div className={`project-title-logo-wrapper logo-${project.id}`}>
              {showLogo ? (
                <img
                  src={project.appLogo}
                  alt={`${project.title} logo`}
                  className="project-title-logo"
                  onError={() => setImgError(true)}
                />
              ) : (
                <AppIcon size={20} className="project-title-icon" />
              )}
            </div>
            <h3>{project.title}</h3>
          </div>

          <p className="project-tagline">{project.tagline}</p>
          <p className="project-description">{project.description}</p>
          <ul className="project-points">
            {project.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Projects({ reduced }) {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="Projects" title="Featured work" description="A selection of my recent mobile application and software development projects." />
        <div className="projects-list">
          {PROJECTS_DATA.map((proj) => (
            <ProjectCard key={proj.id} project={proj} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* EXPERIENCE — two-column showcase with a 3D phone carousel                */
/* ----------------------------------------------------------------------- */

function ConfidentialTypewriter({ reduced }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [displayLength, setDisplayLength] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    let timeoutId;

    const TYPE_MS = 26;
    const ERASE_MS = 12;
    const HOLD_MS = 2200;
    const GAP_MS = 450;

    const run = (index, charCount, mode) => {
      if (cancelled) return;
      const message = CONFIDENTIAL_MESSAGES[index];

      if (mode === "typing") {
        setDisplayLength(charCount);
        if (charCount < message.length) {
          timeoutId = setTimeout(() => run(index, charCount + 1, "typing"), TYPE_MS);
        } else {
          timeoutId = setTimeout(() => run(index, charCount, "erasing"), HOLD_MS);
        }
      } else {
        setDisplayLength(charCount);
        if (charCount > 0) {
          timeoutId = setTimeout(() => run(index, charCount - 1, "erasing"), ERASE_MS);
        } else {
          const nextIndex = (index + 1) % CONFIDENTIAL_MESSAGES.length;
          setMsgIndex(nextIndex);
          timeoutId = setTimeout(() => run(nextIndex, 0, "typing"), GAP_MS);
        }
      }
    };

    timeoutId = setTimeout(() => run(0, 0, "typing"), 500);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [reduced]);

  // Reduced-motion users get every message up front, fully typed and still —
  // no cycling, no cursor blink — so the information is never gated behind
  // motion they've asked not to see.
  if (reduced) {
    return (
      <div className="confidential-typewriter is-static">
        <LockIcon size={13} className="confidential-typewriter-icon" />
        <div className="confidential-typewriter-static-list">
          {CONFIDENTIAL_MESSAGES.map((msg) => (
            <p key={msg}>{msg}</p>
          ))}
        </div>
      </div>
    );
  }

  const visible = CONFIDENTIAL_MESSAGES[msgIndex].slice(0, displayLength);

  return (
    <div className="confidential-typewriter">
      <LockIcon size={13} className="confidential-typewriter-icon" />
      <p aria-hidden="true">
        {visible}
        <span className="caret" />
      </p>
      <span className="sr-only">{CONFIDENTIAL_MESSAGES.join(" ")}</span>
    </div>
  );
}

function ExperienceCard({ item, reduced }) {
  const cardRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  const handleMove = useCallback(
    (e) => {
      if (reduced || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    },
    [reduced]
  );

  const handleLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  }, []);

  const AppIcon = item.AppIcon;
  const showLogo = item.appLogo && !imgError;

  return (
    <Reveal reduced={reduced} as="article" className="experience-card">
      <div ref={cardRef} className="experience-tilt" onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <div className="experience-info">
          <Reveal reduced={reduced} delay={40} className="experience-head">
            <h3 className="experience-role">{item.role}</h3>
            <div className="experience-org-row">
              <span className="experience-org">{item.org}</span>
              <span className="experience-period">{item.period}</span>
            </div>
          </Reveal>

          <Reveal reduced={reduced} delay={110}>
            <ul className="experience-points">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Reveal>

          {item.highlight && (
            <Reveal reduced={reduced} delay={180} className="experience-highlight">
              <span className="experience-highlight-label">Project Highlight</span>
              <p>{item.highlight}</p>
            </Reveal>
          )}

          {item.tags && (
            <Reveal reduced={reduced} delay={240} className="tag-row">
              {item.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </Reveal>
          )}
        </div>

        <div className="experience-visual">
          {item.confidential && (
            <Reveal reduced={reduced} delay={80} className="confidential-project-badge">
              <LockIcon size={12} strokeWidth={2.25} />
              <span>Confidential Project</span>
            </Reveal>
          )}

          <ProjectMockups
            project={item}
            showLogo={showLogo}
            AppIcon={AppIcon}
            onLogoError={() => setImgError(true)}
            reduced={reduced}
          />

          {item.confidential && (
            <Reveal reduced={reduced} delay={200} className="confidential-typewriter-wrap">
              <ConfidentialTypewriter reduced={reduced} />
            </Reveal>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function Experience({ reduced }) {
  return (
    <section id="experience" className="section section-alt">
      <div className="section-inner">
        <SectionHeading eyebrow="Experience" title="Where I've worked" description="Hands-on, applied experience building a real mobile application." />
        <div className="experience-list">
          {EXPERIENCE.map((item) => (
            <ExperienceCard key={item.id || item.role} item={item} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* ACHIEVEMENTS & CERTIFICATIONS                                           */
/* Category tabs filter a grid of data-driven cards; a 3D image carousel   */
/* (built the same way as the Projects/Experience phone carousel, but with */
/* flat photo cards instead of phone mockups) shows every achievement that */
/* has photos attached, with the matching details displayed beside it.     */
/* ----------------------------------------------------------------------- */

function GalleryCardMedia({ media, CategoryIcon }) {
  const [failed, setFailed] = useState(false);
  if (!media || !media.src || failed) {
    return (
      <div className="gallery-card-placeholder">
        {CategoryIcon ? <CategoryIcon size={26} /> : <ImageIcon size={26} />}
        <span>Photo coming soon</span>
      </div>
    );
  }
  return <img src={media.src} alt={media.alt || ""} className="gallery-card-img" draggable="false" onError={() => setFailed(true)} />;
}

function GalleryCarousel({ slides, active, onActiveChange, reduced, onOpenLightbox }) {
  const count = slides.length;
  const [isPaused, setIsPaused] = useState(false);
  const [frontHover, setFrontHover] = useState(false);
  const pointerRef = useRef({ x: 0, dragging: false });

  const goTo = useCallback((i) => onActiveChange(((i % count) + count) % count), [count, onActiveChange]);
  const goNext = useCallback(() => onActiveChange(((active + 1) % count + count) % count), [active, count, onActiveChange]);
  const goPrev = useCallback(() => onActiveChange(((active - 1) % count + count) % count), [active, count, onActiveChange]);

  useEffect(() => {
    if (isPaused || reduced || count <= 1) return;
    const intervalId = setInterval(goNext, 4500);
    return () => clearInterval(intervalId);
  }, [isPaused, reduced, count, goNext]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
  };

  const handlePointerDown = (e) => {
    setIsPaused(true);
    pointerRef.current = { x: e.clientX, dragging: true };
  };
  const handlePointerUp = (e) => {
    setIsPaused(false);
    if (!pointerRef.current.dragging) return;
    const dx = e.clientX - pointerRef.current.x;
    pointerRef.current.dragging = false;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) goNext(); else goPrev();
  };
  const handleTouchStart = (e) => {
    setIsPaused(true);
    pointerRef.current = { x: e.touches[0].clientX, dragging: true };
  };
  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (!pointerRef.current.dragging) return;
    const dx = e.changedTouches[0].clientX - pointerRef.current.x;
    pointerRef.current.dragging = false;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) goNext(); else goPrev();
  };

  const MAX_VISIBLE_DEPTH = 2;

  return (
    <div
      className="gallery-carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label="Achievement photos"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="gallery-carousel-stage"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, i) => {
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;

          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          const clamped = Math.max(-MAX_VISIBLE_DEPTH, Math.min(MAX_VISIBLE_DEPTH, offset));
          const hidden = absOffset > MAX_VISIBLE_DEPTH;

          const isHoverLift = isActive && frontHover && !reduced;
          const scale = isActive ? (isHoverLift ? 1.045 : 1) : Math.max(0.72, 1 - absOffset * 0.14);
          const opacity = hidden ? 0 : Math.max(0.32, 1 - absOffset * 0.3);
          const zIndex = 100 - absOffset;

          const transform = [
            "translate(-50%, -50%)",
            `translateX(calc(var(--gallery-offset-x) * ${clamped}))`,
            `translateZ(calc(var(--gallery-offset-z) * ${-absOffset}))`,
            isHoverLift ? "translateZ(28px)" : "",
            `rotateY(calc(var(--gallery-rotate-y) * ${-clamped}))`,
            `scale(${scale})`,
          ].filter(Boolean).join(" ");

          const categoryMeta = ACHIEVEMENT_CATEGORIES.find((c) => c.id === slide.achievement.category);
          const media = slide.image;

          return (
            <div
              key={slide.key}
              className={`gallery-card ${isActive ? "is-active" : ""} ${isHoverLift ? "is-hover-lift" : ""}`}
              style={{ transform, opacity, zIndex, pointerEvents: hidden ? "none" : "auto" }}
              onClick={() => (isActive ? onOpenLightbox(media) : goTo(i))}
              onMouseEnter={() => isActive && setFrontHover(true)}
              onMouseLeave={() => setFrontHover(false)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slide.achievement.title}, photo ${slide.indexInGroup + 1} of ${slide.totalInGroup}`}
              aria-hidden={!isActive}
            >
              <GalleryCardMedia media={media} CategoryIcon={categoryMeta ? categoryMeta.icon : Award} />
              {slide.totalInGroup > 1 && (
                <span className="gallery-card-count">
                  {slide.indexInGroup + 1}/{slide.totalInGroup}
                </span>
              )}
              {isActive && media && media.src && (
                <span className="gallery-card-zoom-hint" aria-hidden="true">
                  <ImageIcon size={13} />
                </span>
              )}
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <div className="phone-carousel-controls">
          <button type="button" className="carousel-btn" onClick={goPrev} aria-label="Previous photo">
            <ChevronLeftIcon size={18} />
          </button>
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot ${i === active ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === active}
              />
            ))}
          </div>
          <button type="button" className="carousel-btn" onClick={goNext} aria-label="Next photo">
            <ChevronRightIcon size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

function AchievementInfoPanel({ item, photoIndex = 0, photoTotal = 0 }) {
  if (!item) return null;
  const categoryMeta = ACHIEVEMENT_CATEGORIES.find((c) => c.id === item.category);
  const CategoryIcon = categoryMeta ? categoryMeta.icon : Award;

  return (
    <div className="achievement-info-panel" key={item.id}>
      <div className="achievement-info-badges">
        <span className="achievement-info-category">
          <CategoryIcon size={12} /> {categoryMeta ? categoryMeta.label : item.category}
        </span>
        {photoTotal > 1 && (
          <span className="achievement-info-photo-count">
            <ImageIcon size={12} /> Photo {photoIndex + 1} of {photoTotal}
          </span>
        )}
      </div>
      <h3>{item.title}</h3>
      <div className="achievement-info-meta">
        {item.organization && (
          <span>
            <BuildingIcon size={13} /> {item.organization}
          </span>
        )}
        {item.date && (
          <span>
            <CalendarIcon size={13} /> {item.date}
          </span>
        )}
        {!item.date && item.year && (
          <span>
            <CalendarIcon size={13} /> {item.year}
          </span>
        )}
        {item.time && (
          <span>
            <ClockIcon size={13} /> {item.time}
          </span>
        )}
        {item.location && (
          <span>
            <MapPin size={13} /> {item.location}
          </span>
        )}
      </div>
      {item.description && <p className="achievement-info-desc">{item.description}</p>}
      {item.details && item.details.length > 0 && (
        <ul className="achievement-info-details">
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
      {item.link && (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="achievement-card-photos-btn">
          <ExternalLink size={13} /> View Link
        </a>
      )}
    </div>
  );
}

function AchievementsGallery({ items, reduced, jumpToId, jumpToken }) {
  const [active, setActive] = useState(0);
  const [lightboxMedia, setLightboxMedia] = useState(null);
  const containerRef = useRef(null);

  // Flatten each achievement's images into individual, browsable slides —
  // an achievement with 3 photos gets 3 slides in a row, each one still
  // pointing back at the same achievement so the info panel stays in sync
  // no matter which of its photos is currently active.
  const slides = useMemo(() => {
    const out = [];
    items.forEach((achievement) => {
      const images = getAchievementImages(achievement);
      images.forEach((image, idx) => {
        out.push({ key: `${achievement.id}-${idx}`, achievement, image, indexInGroup: idx, totalInGroup: images.length });
      });
    });
    return out;
  }, [items]);

  useEffect(() => {
    if (!jumpToId) return;
    const idx = slides.findIndex((s) => s.achievement.id === jumpToId);
    if (idx >= 0) {
      setActive(idx);
      containerRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jumpToken]);

  // Keep the active index valid if the slide count ever changes (e.g. an
  // achievement's images array is edited while this is mounted).
  useEffect(() => {
    setActive((a) => (a >= slides.length ? 0 : a));
  }, [slides.length]);

  if (slides.length === 0) return null;
  const activeSlide = slides[active] || slides[0];
  const lightboxCategoryMeta = ACHIEVEMENT_CATEGORIES.find((c) => c.id === activeSlide.achievement.category);
  const LightboxCategoryIcon = lightboxCategoryMeta ? lightboxCategoryMeta.icon : Award;

  return (
    <div className="achievements-gallery" ref={containerRef}>
      <GalleryCarousel slides={slides} active={active} onActiveChange={setActive} reduced={reduced} onOpenLightbox={setLightboxMedia} />
      <AchievementInfoPanel item={activeSlide.achievement} photoIndex={activeSlide.indexInGroup} photoTotal={activeSlide.totalInGroup} />

      {lightboxMedia && lightboxMedia.src && (
        <div className="lightbox-overlay" onClick={() => setLightboxMedia(null)}>
          <button className="lightbox-close" onClick={() => setLightboxMedia(null)} aria-label="Close image">
            <XIcon size={28} />
          </button>
          <div className="gallery-lightbox-card" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxMedia.src}
              alt={lightboxMedia.alt || ""}
              className="gallery-lightbox-image"
            />
            <div className="gallery-lightbox-caption">
              <span className="gallery-lightbox-category">
                <LightboxCategoryIcon size={13} /> {lightboxCategoryMeta ? lightboxCategoryMeta.label : activeSlide.achievement.category}
              </span>
              <h4>{activeSlide.achievement.title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AchievementCategoryTabs({ active, onSelect }) {
  return (
    <div className="achv-tabs" role="tablist" aria-label="Filter achievements by category">
      {ACHIEVEMENT_CATEGORIES.map((cat) => {
        const CatIcon = cat.icon;
        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            className={`achv-tab ${active === cat.id ? "active" : ""}`}
            onClick={() => onSelect(cat.id)}
          >
            <CatIcon size={14} />
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function AchievementCard({ item, reduced, delay, onViewPhotos }) {
  const IconComp = item.icon || Award;
  const hasImages = getAchievementImages(item).length > 0;

  return (
    <Reveal reduced={reduced} delay={delay} as="article" className="achievement-card-full">
      <div className="achievement-card-head">
        <span className="achievement-card-icon">
          <IconComp size={18} />
        </span>
        <div className="achievement-card-title-wrap">
          <h4>{item.title}</h4>
          {item.organization && <p className="achievement-card-org">{item.organization}</p>}
        </div>
      </div>

      <div className="achievement-card-meta">
        {item.date && (
          <span>
            <CalendarIcon size={12} /> {item.date}
          </span>
        )}
        {!item.date && item.year && (
          <span>
            <CalendarIcon size={12} /> {item.year}
          </span>
        )}
        {item.time && (
          <span>
            <ClockIcon size={12} /> {item.time}
          </span>
        )}
        {item.location && (
          <span>
            <MapPin size={12} /> {item.location}
          </span>
        )}
      </div>

      {item.description && <p className="achievement-card-desc">{item.description}</p>}

      {item.details && item.details.length > 0 && (
        <ul className="achievement-card-details">
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}

      {(hasImages || item.link) && (
        <div className="achievement-card-actions">
          {hasImages && (
            <button type="button" className="achievement-card-photos-btn" onClick={() => onViewPhotos(item.id)}>
              <ImageIcon size={13} /> View Photos
            </button>
          )}
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="achievement-card-photos-btn">
              <ExternalLink size={13} /> View Link
            </a>
          )}
        </div>
      )}
    </Reveal>
  );
}

function Achievements({ reduced }) {
  const [activeCategory, setActiveCategory] = useState(ACHIEVEMENT_CATEGORIES[0].id);
  const [jumpToId, setJumpToId] = useState(null);
  const [jumpToken, setJumpToken] = useState(0);

  const galleryItems = useMemo(() => ACHIEVEMENTS_DATA.filter((it) => getAchievementImages(it).length > 0), []);
  const categoryItems = useMemo(() => ACHIEVEMENTS_DATA.filter((it) => it.category === activeCategory), [activeCategory]);

  const handleViewPhotos = (id) => {
    setJumpToId(id);
    setJumpToken((t) => t + 1);
  };

  return (
    <section id="achievements" className="section achievements-section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Achievements & Certifications"
          title="Recognition & continuous learning"
          description="Academic honors, certifications, and the seminars, webinars, and tech events I've taken part in."
        />

        {galleryItems.length > 0 && (
          <Reveal reduced={reduced} className="achievements-gallery-wrap">
            <AchievementsGallery items={galleryItems} reduced={reduced} jumpToId={jumpToId} jumpToken={jumpToken} />
          </Reveal>
        )}

        <AchievementCategoryTabs active={activeCategory} onSelect={setActiveCategory} />

        <div className="achievements-grid" key={activeCategory}>
          {categoryItems.map((item, i) => (
            <AchievementCard key={item.id} item={item} reduced={reduced} delay={i * 80} onViewPhotos={handleViewPhotos} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* CONTACT                                                                  */
/* ----------------------------------------------------------------------- */

/**
 * Encodes a plain object as an application/x-www-form-urlencoded string,
 * which is the body format Netlify Forms expects for AJAX submissions.
 * Kept separate from the component so the submission mechanics can be
 * unit-tested or swapped out without touching any JSX.
 */
function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

/**
 * Posts a submission to Netlify Forms. Netlify intercepts POSTs to any URL
 * on the site as long as the body contains a "form-name" field matching a
 * form it detected at deploy time, so this can simply POST to "/".
 * Returns the fetch Response so the caller can check response.ok.
 */
function submitToNetlifyForm(formName, fields) {
  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData({ "form-name": formName, ...fields }),
  });
}

function FloatingField({
  label,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  error,
  required,
  maxLength,
  autoComplete,
  textarea,
  autoGrow,
  minHeight = 120,
  maxHeight = 280,
}) {
  const Tag = textarea ? "textarea" : "input";
  const areaRef = useRef(null);

  useEffect(() => {
    if (!textarea || !autoGrow || !areaRef.current) return;
    const el = areaRef.current;
    el.style.height = `${minHeight}px`;
    const nextHeight = Math.min(Math.max(el.scrollHeight, minHeight), maxHeight);
    el.style.height = `${nextHeight}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [value, textarea, autoGrow, minHeight, maxHeight]);

  return (
    <div className={`field ${value ? "filled" : ""} ${error ? "has-error" : ""}`}>
      <Tag
        ref={textarea ? areaRef : undefined}
        id={name}
        name={name}
        type={textarea ? undefined : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        rows={textarea ? 1 : undefined}
        className={textarea && autoGrow ? "auto-grow-textarea" : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      <label htmlFor={name}>
        {label}
        {required && <span className="field-required-mark" aria-hidden="true"> *</span>}
      </label>
      {error && (
        <span id={`${name}-error`} className="field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

const CONTACT_FORM_NAME = "contact";

// This is the same email-format pattern browsers use to validate
// <input type="email">. It requires a properly formed local part, an "@",
// and a domain with at least one dot and a real label on each side of it —
// so "test@", "hello@", and "abc" are all rejected, but it stays permissive
// enough to accept any legitimate provider or custom domain.
const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const MAX_EMAIL_LENGTH = 254; // RFC 5321 limit
const MAX_NAME_LENGTH = 100;
const MAX_SUBJECT_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 5000;

// Common providers used to gently catch typos (gmial.com, yaho.com, etc.)
// without ever blocking submission — this only ever offers a suggestion.
const COMMON_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "live.com",
];

function levenshteinDistance(a, b) {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let i = 0; i < rows; i++) dp[i][0] = i;
  for (let j = 0; j < cols; j++) dp[0][j] = j;
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[rows - 1][cols - 1];
}

/**
 * Suggests a corrected email address when the domain looks like a one- or
 * two-character typo of a well-known provider (e.g. "gmial.com" -> "gmail.com").
 * Returns null whenever the domain is already fine, unknown, or too different
 * to guess confidently — legitimate/uncommon domains are never "corrected".
 */
function suggestEmailCorrection(email) {
  const at = email.lastIndexOf("@");
  if (at === -1) return null;
  const domain = email.slice(at + 1).toLowerCase();
  if (!domain || COMMON_EMAIL_DOMAINS.includes(domain)) return null;

  let bestMatch = null;
  let bestDistance = Infinity;
  for (const known of COMMON_EMAIL_DOMAINS) {
    const distance = levenshteinDistance(domain, known);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestMatch = known;
    }
  }

  if (bestMatch && bestDistance > 0 && bestDistance <= 2 && domain.length >= 5) {
    return email.slice(0, at + 1) + bestMatch;
  }
  return null;
}

function Contact({ reduced }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", "bot-field": "" });
  const [errors, setErrors] = useState({});
  const [emailSuggestion, setEmailSuggestion] = useState(null);
  // idle -> sending -> sent | error
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const resetTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const update = (key) => (e) => {
    const val = e.target.value;
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    if (key === "email") setEmailSuggestion(null);
  };

  const validate = () => {
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();
    const next = {};

    if (!name) next.name = "Please enter your name.";

    if (!email) next.email = "Please enter your email address.";
    else if (email.length > MAX_EMAIL_LENGTH) next.email = "That email address is too long.";
    else if (!EMAIL_PATTERN.test(email)) next.email = "Please enter a valid email address, e.g. name@example.com.";

    if (!subject) next.subject = "Please enter a subject.";

    if (!message) next.message = "Please enter a message.";
    else if (message.length < 10) next.message = "Please add a little more detail to your message.";

    return next;
  };

  const handleBlur = (key) => () => {
    setErrors((prev) => ({ ...prev, [key]: validate()[key] }));
    if (key === "email") {
      const email = form.email.trim();
      const hasError = validate().email;
      setEmailSuggestion(!hasError ? suggestEmailCorrection(email) : null);
    }
  };

  const applyEmailSuggestion = () => {
    if (!emailSuggestion) return;
    setForm((f) => ({ ...f, email: emailSuggestion }));
    setErrors((prev) => ({ ...prev, email: undefined }));
    setEmailSuggestion(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot tripped — a bot filled a field real visitors never see.
    // Fail silently rather than tipping the bot off or surfacing an error.
    if (form["bot-field"]) return;

    if (status === "sending") return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      // The "email" and "subject" field names are reserved by Netlify Forms:
      // Netlify automatically sets the notification email's Reply-To header
      // to the "email" value and uses "subject" as the actual email subject
      // line (instead of the generic "New submission from contact" default),
      // as long as no static subject override is set in the Netlify UI.
      const response = await submitToNetlifyForm(CONTACT_FORM_NAME, {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      if (!response.ok) throw new Error(`Netlify responded with status ${response.status}`);

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", "bot-field": "" });
      setErrors({});
      setEmailSuggestion(null);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Please try again, or email me directly.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="Contact" title="Let's build something useful." description="Have a project, opportunity, or collaboration in mind? I'd be happy to connect." />

        <div className="contact-grid">
          <Reveal reduced={reduced} className="contact-details">
            <a className="contact-item" href="mailto:christianmanalo.reyes@gmail.com">
              <span className="contact-item-icon"><Mail size={17} /></span>
              <span>christianmanalo.reyes@gmail.com</span>
            </a>
            <a className="contact-item" href="tel:09766586288">
              <span className="contact-item-icon"><Phone size={17} /></span>
              <span>0976 658 6288</span>
            </a>
            <span className="contact-item">
              <span className="contact-item-icon"><MapPin size={17} /></span>
              <span>City of Lipa, Batangas</span>
            </span>
            <a
              className="contact-item"
              href="https://www.linkedin.com/in/christian-reyes-b64126397/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-item-icon"><Linkedin size={17} /></span>
              <span>linkedin.com/in/christian-reyes</span>
            </a>
          </Reveal>

          <Reveal
            reduced={reduced}
            delay={120}
            as="form"
            className="contact-form"
            name={CONTACT_FORM_NAME}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Required so Netlify's form handler knows which registered form this POST belongs to. */}
            <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />

            {/* Honeypot: invisible to real visitors (off-screen, unfocusable), but a plain
                text field bots tend to fill in automatically. Netlify silently drops any
                submission where this isn't empty. */}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="bot-field">Leave this field blank</label>
              <input id="bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" value={form["bot-field"]} onChange={update("bot-field")} />
            </div>

            <FloatingField
              label="Name"
              name="name"
              value={form.name}
              onChange={update("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
              required
              maxLength={MAX_NAME_LENGTH}
              autoComplete="name"
            />
            <FloatingField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={update("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              required
              maxLength={MAX_EMAIL_LENGTH}
              autoComplete="email"
            />
            {!errors.email && emailSuggestion && (
              <p className="field-suggestion">
                Did you mean{" "}
                <button type="button" className="field-suggestion-btn" onClick={applyEmailSuggestion}>
                  {emailSuggestion}
                </button>
                ?
              </p>
            )}
            <FloatingField
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={update("subject")}
              onBlur={handleBlur("subject")}
              error={errors.subject}
              required
              maxLength={MAX_SUBJECT_LENGTH}
            />
            <FloatingField
              label="Message"
              name="message"
              textarea
              autoGrow
              value={form.message}
              onChange={update("message")}
              onBlur={handleBlur("message")}
              error={errors.message}
              required
              maxLength={MAX_MESSAGE_LENGTH}
            />

            <button type="submit" className="btn btn-primary btn-full" disabled={status === "sending"} aria-busy={status === "sending"}>
              {status === "sending" && (
                <>
                  <Loader2 size={16} className="spin" /> <span>Sending…</span>
                </>
              )}
              {status === "sent" && (
                <>
                  <CheckCircle2 size={16} /> <span>Message Sent</span>
                </>
              )}
              {(status === "idle" || status === "error") && (
                <>
                  <span>Send Message</span> <Send size={16} />
                </>
              )}
            </button>

            <div className="contact-status" role="status" aria-live="polite">
              {status === "sent" && (
                <div className="status-box status-success">
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Message sent successfully!</strong>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}
              {status === "error" && (
                <div className="status-box status-error">
                  <AlertCircle size={20} />
                  <div>
                    <strong>Message not sent</strong>
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* FOOTER                                                                   */
/* ----------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-identity">
          <img src="images/profile-logo.png" alt="Christian M. Reyes" className="footer-avatar" />
          <div>
            <p className="footer-name">Christian M. Reyes</p>
            <p className="footer-role">BS Computer Science Graduate</p>
          </div>
        </div>

        <ul className="footer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer-socials">
          <a
            href="files/Christian_Reyes_Resume.pdf"
            download="Christian_Reyes_Resume.pdf"
            aria-label="Download resume"
            title="Download resume"
          >
            <FileText size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-reyes-b64126397"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            title="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <p className="footer-copy">&copy; 2026 Christian M. Reyes. Built with React.</p>
    </footer>
  );
}

/* ----------------------------------------------------------------------- */
/* APP + RENDER                                                             */
/* ----------------------------------------------------------------------- */

function App() {
  const reduced = usePrefersReducedMotion();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (sections.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`portfolio-root ${reduced ? "reduced-motion" : ""}`}>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <CursorGlow reduced={reduced} />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero reduced={reduced} />
        <About reduced={reduced} />
        <Skills reduced={reduced} />
        <Projects reduced={reduced} />
        <Experience reduced={reduced} />
        <Achievements reduced={reduced} />
        <Contact reduced={reduced} />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);