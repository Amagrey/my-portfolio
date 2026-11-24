import type { Tone } from "@/components/ui/Pill";

export const profile = {
  name: "Amazing-Grace Ndubueze",
  role: "Frontend Developer",
  tagline: "Frontend developer building with React and TypeScript, growing into backend.",
  badge: "Open to frontend and full-stack roles",
  headline: "I turn designs into fast, clean interfaces, and currently transitioning into building the APIs that power them.",
  intro:
    "Hello! I am Amazing-Grace a frontend developer. I build responsive web apps with React, TypeScript, Next.js and Tailwind CSS, connecting them to REST APIs. Currently transitioning into backend development building features from the screen to the server.",
  email: "amazinggrace.nd@gmail.com",
  Github: "Github",
  socials: [
    { label: "GitHub", href: "https://github.com/Amagrey" }, 
  ],
};

export const skills: { group: string; note: string; tone: Tone; items: string[] }[] = [
  {
    group: "Frontend",
    note: "What I use every day.",
    tone: "pink",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Vite", "Webpack", "Figma", "Git and GitHub", "Responsive design"],
  },
  {
    group: "Backend",
    note: "What I’m learning now.",
    tone: "green",
    items: ["REST APIs", "JSON", "API integration", "Node.js", "Express", "Databases"],
  },
  {
    group: "Beyond code",
    note: "Skills that make me easy to work with.",
    tone: "violet",
    items: ["Project management", "Team coordination", "Research and reporting", "Debugging", "Problem solving"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  kind: "Frontend" | "Full stack" | "Backend";
  tone: Tone;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Crane",
    kind: "Frontend",
    tone: "blue",
    href: "#",
    blurb: "Describe what it does, who it’s for, and one result, like faster load time or a cleaner flow.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "EduGames",
    kind: "Frontend",
    tone: "amber",
    href: "#",
    blurb: "Say what you built on the interface side and how it connects to the API.",
    tags: ["Next.js", "REST API", "TypeScript"],
  },
  {
    title: "Lucky-Line Games",
    kind: "Backend",
    tone: "green",
    href: "#",
    blurb: "Add your first backend project here, even a small API. Hiring managers like seeing the transition in progress.",
    tags: ["Node.js", "Express"],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Backend / Full-stack Developer Intern",
    org: "Script Desk",
    period: "Oct 2026 – Present",
    points: [
      "Build backend features with Python and FastAPI: routes, endpoints, models, schemas and services that work together to handle each request.",
      "Design REST APIs and work with HTTP methods (GET, POST, PUT, PATCH, DELETE), JSON, headers and query parameters.",
      "Implement authentication and authorization, including login, OTP verification, access tokens and permissions.",
      "Model and manage data with SQLAlchemy and SQL: tables, primary and foreign keys, relationships and joins.",
      "Integrate third-party APIs, including subscription verification and handling of API responses.",
      "Debug using Swagger and backend logs, and read HTTP status codes (200, 401, 403, 404, 422, 500, 503) to find the cause of errors.",
      "Work on application logic: subscription access, gameplay rules, user records and data for an admin dashboard.",
    ],
  },
  {
    role: "Frontend Developer (Full-time)",
    org: "Script Desk",
    period: "Jul 2026 – Present",
    points: [
      "Build and maintain scalable web applications with React, TypeScript, Next.js and Tailwind CSS.",
      "Integrate REST APIs so interfaces get reliable data from backend services.",
      "Create reusable, modular UI components and turn Figma designs into pixel-accurate screens.",
      "Improve performance and responsiveness across mobile and desktop devices.",
      "Collaborate with backend developers and designers, and use Git for version control.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    org: "Script Desk",
    period: "Oct 2025 – Jul 2026",
    points: [
      "Built web applications with React, TypeScript, Next.js and Tailwind CSS.",
      "Integrated REST APIs to connect interfaces with backend services.",
      "Built reusable UI components and implemented designs from Figma.",
      "Worked with backend developers and designers, and used Git for version control.",
    ],
  },
];

export const about = [
  "I’m a frontend developer who is now building on the backend too. I started with a frontend certification in 2022, and I’ve built interfaces with React, TypeScript and Next.js ever since.",
  "I joined Script Desk as a frontend intern and moved into a full-time frontend role in July 2026. Working alongside backend developers, I saw how data moves from the server to the screen, and that made me want to build that side myself. I'm now switcin into writting APIs with FastAPI, model data with SQLAlchemy, and handle authentication, third-party integrations and debugging.",
  "At Script Desk, I worked alongside backend developers and saw how data moves from the server to the screen. That made me want to build that side myself, so I moved into backend and full-stack work. Switching to writting APIs with FastAPI, model data with SQLAlchemy, and handle authentication, third-party integrations and debugging.",
  "I graduated from the University of Ibadan in 2025, and I managed teams and events before moving into tech. That background helps me communicate clearly and think about the people who use what I build.",
];