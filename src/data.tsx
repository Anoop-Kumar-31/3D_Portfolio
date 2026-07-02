import React from 'react';
import {
  // Frontend
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiFigma, SiVite,
  // Backend
  SiNodedotjs, SiExpress, SiFirebase, SiAxios, SiSocket, SiJsonwebtokens, SiPython, SiPostman, SiNpm, SiYarn,
  // Database / Infra
  SiPostgresql, SiMongodb, SiRedis, SiDocker, SiNginx, SiGit, SiGithub, SiGithubactions, SiLinux, SiUbuntu
} from 'react-icons/si';

export const SECTIONS = ['Home', 'Skills', 'Projects', 'About'];

export const SPATIAL_LABELS = {
  frontend: {
    tag: 'CORE WORKSPACE',
    title: 'Front-End Dev',
    desc: 'Crafting highly interactive, responsive, and immersive interfaces.'
  },
  backend: {
    tag: 'SYSTEM LOGIC',
    title: 'Back-End Dev',
    desc: 'Designing scalable services, RESTful APIs, and architectural flow.'
  },
  database: {
    tag: 'INFRASTRUCTURE',
    title: 'Architecture Dev',
    desc: 'Managing relational & NoSQL data, orchestration, and deployments.'
  }
};

export interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  group: 'frontend' | 'backend' | 'database';
  color: string;
  icon: React.ReactNode;
}

export const TECH_DATA: TechItem[] = [
  // Frontend
  { id: 'html5', name: 'HTML5', category: 'frontend', group: 'frontend', color: '#e34c26', icon: <SiHtml5 /> },
  { id: 'css3', name: 'CSS3', category: 'frontend', group: 'frontend', color: '#1572b6', icon: <SiCss /> },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', group: 'frontend', color: '#f7df1e', icon: <SiJavascript /> },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', group: 'frontend', color: '#3178c6', icon: <SiTypescript /> },
  { id: 'react', name: 'React', category: 'frontend', group: 'frontend', color: '#61dafb', icon: <SiReact /> },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', group: 'frontend', color: '#ffffff', icon: <SiNextdotjs /> },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', group: 'frontend', color: '#06b6d4', icon: <SiTailwindcss /> },
  { id: 'redux', name: 'Redux', category: 'frontend', group: 'frontend', color: '#764abc', icon: <SiRedux /> },
  { id: 'figma', name: 'Figma', category: 'frontend', group: 'frontend', color: '#f24e1e', icon: <SiFigma /> },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'backend', group: 'backend', color: '#339933', icon: <SiNodedotjs /> },
  { id: 'express', name: 'Express.js', category: 'backend', group: 'backend', color: '#ffffff', icon: <SiExpress /> },
  { id: 'firebase', name: 'Firebase', category: 'backend', group: 'backend', color: '#ffca28', icon: <SiFirebase /> },
  { id: 'axios', name: 'Axios', category: 'backend', group: 'backend', color: '#5a29e5', icon: <SiAxios /> },
  { id: 'socket', name: 'Socket.IO', category: 'backend', group: 'backend', color: '#ffffff', icon: <SiSocket /> },
  { id: 'jwt', name: 'JWT', category: 'backend', group: 'backend', color: '#fb015b', icon: <SiJsonwebtokens /> },
  { id: 'python', name: 'Python', category: 'backend', group: 'backend', color: '#3776ab', icon: <SiPython /> },
  
  // Database
  { id: 'postgres', name: 'PostgreSQL', category: 'database', group: 'database', color: '#336791', icon: <SiPostgresql /> },
  { id: 'mongodb', name: 'MongoDB', category: 'database', group: 'database', color: '#47a248', icon: <SiMongodb /> },
  { id: 'redis', name: 'Redis', category: 'database', group: 'database', color: '#dc382d', icon: <SiRedis /> },

  // DevOps
  { id: 'docker', name: 'Docker', category: 'devops', group: 'database', color: '#2496ed', icon: <SiDocker /> },
  { id: 'nginx', name: 'Nginx', category: 'devops', group: 'database', color: '#009639', icon: <SiNginx /> },
  { id: 'git', name: 'Git', category: 'devops', group: 'database', color: '#f05032', icon: <SiGit /> },
  { id: 'github', name: 'GitHub', category: 'devops', group: 'database', color: '#ffffff', icon: <SiGithub /> },
  { id: 'githubactions', name: 'GitHub Actions', category: 'devops', group: 'database', color: '#2088ff', icon: <SiGithubactions /> },

  // Tools
  { id: 'linux', name: 'Linux', category: 'tools', group: 'database', color: '#fcc624', icon: <SiLinux /> },
  { id: 'ubuntu', name: 'Ubuntu', category: 'tools', group: 'database', color: '#e95420', icon: <SiUbuntu /> },
  { id: 'postman', name: 'Postman', category: 'tools', group: 'backend', color: '#ff6c37', icon: <SiPostman /> },
  { id: 'npm', name: 'npm', category: 'tools', group: 'backend', color: '#cb3837', icon: <SiNpm /> },
  { id: 'yarn', name: 'Yarn', category: 'tools', group: 'backend', color: '#2c8ebb', icon: <SiYarn /> },
  { id: 'vite', name: 'Vite', category: 'tools', group: 'frontend', color: '#646cff', icon: <SiVite /> }
];

export const SECTION_DATA: Record<string, {
  tag: string;
  title: string;
  desc: string;
  techs: TechItem[];
}> = {
  Frontend: {
    tag: SPATIAL_LABELS.frontend.tag,
    title: SPATIAL_LABELS.frontend.title,
    desc: SPATIAL_LABELS.frontend.desc,
    techs: TECH_DATA.filter(t => t.group === 'frontend')
  },
  Backend: {
    tag: SPATIAL_LABELS.backend.tag,
    title: SPATIAL_LABELS.backend.title,
    desc: SPATIAL_LABELS.backend.desc,
    techs: TECH_DATA.filter(t => t.group === 'backend')
  },
  Database: {
    tag: SPATIAL_LABELS.database.tag,
    title: SPATIAL_LABELS.database.title,
    desc: SPATIAL_LABELS.database.desc,
    techs: TECH_DATA.filter(t => t.group === 'database')
  }
};

export const workExperience = [
  {
    company: "Techasoft Pvt. Ltd.",
    companyLogo: "/img/tas.png",
    role: "Software Developer Intern",
    period: "May 2025 – Nov 2025",

    "Backend Development": [
      "Built scalable REST APIs using Node.js (Express) and Django.",
      "Assisted in designing relational database schemas and Sequelize ORM models.",
      "Implemented JWT authentication with role-based access control.",
      "Handled transactions and associations for complex database operations.",
      "Contributed to modular backend architecture following team guidelines.",
      "Developed APIs supporting multi-portal restaurant management workflows.",
    ],

    "Frontend Development": [
      "Developed three role-based React portals (Admin, Vendor, Customer).",
      "Managed application state using Redux Toolkit.",
      "Built responsive dashboards and reusable UI component libraries.",
      "Integrated Server-Sent Events (SSE) for real-time updates.",
      "Implemented dynamic forms, tables, and data-driven UI components.",
      "Improved user experience with optimized API integration patterns.",
    ],

    "DevOps & Collaboration": [
      "Collaborated using Git-based workflows in Linux development environments.",
      "Configured backend services and environment variables for deployment.",
      "Improved API performance using Redis caching strategies.",
      "Optimized database queries and indexing for faster responses.",
      "Documented APIs and backend modules for developer onboarding.",
      "Worked closely with designers and developers to deliver production features.",
    ],

    "Key Achievements": [
      "Contributed to a multi-portal platform used by restaurants and customers.",
      "Refactored legacy modules to improve code structure and maintainability.",
      "Developed automated email notifications using Nodemailer templates.",
      "Delivered end-to-end features across backend APIs and frontend dashboards.",
      "Supported onboarding workflows and restaurant management operations.",
    ],
  },
];

export const projects = [
  {
    id: 6,
    title: "QueueFlow",
    businessContext: "Real-Time Developer Workflow Intelligence Platform for managing developer workflows with intelligence insights.",
    period: "Feb 2026 – Present",
    description: "A production-grade real-time collaboration platform that manages developer workflows using time-ordered queues, event-driven architecture, and WebSocket-based synchronization. Built with a workflow intelligence layer to detect bottlenecks, workload imbalance, and task delays in real time.",
    problemSolutionImpact: {
      problem: "Traditional tools like Jira and Trello suffer from stale state, lack real-time collaboration, and provide limited insight into workflow inefficiencies.",
      solution: "Designed an event-driven system using WebSockets to provide real-time synchronization, developer queue management, and intelligent workflow insights.",
      impact: "Enables teams to detect bottlenecks, balance workloads, and improve productivity with live updates and actionable insights. Allows Clients to track the progress of their projects in real time and leave notes on the tasks."
    },
    techStack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
      "PostgreSQL",
      "Prisma ORM",
      "JWT Authentication",
      "Event-Driven Architecture",
      "WebSocket Real-Time Sync",
    ],
    link: "https://queue-flow-rho.vercel.app/",
    githubRepo: {
      frontend: "https://github.com/Anoop-Kumar-31/QueueFlow_Frontend",
      backend: "https://github.com/Anoop-Kumar-31/QueueFlow_Backend",
      JuctionModuleRepo: "https://github.com/Anoop-Kumar-31/QueueFlow-Real-Time-Task-Queue-Team-Collaboration-Platform"
    },
    project_img: "/gallery/QueueFlow/ququeflow.png",
    category: "Full-Stack",
    startDate: "2026-02",
    gallery: [
      "/gallery/QueueFlow/Login.png",
      "/gallery/QueueFlow/SignUp.png",
      "/gallery/QueueFlow/AnalyticalOverview.png",
      "/gallery/QueueFlow/MyTask.png",
      "/gallery/QueueFlow/OverviewDashboard.png",
      "/gallery/QueueFlow/ProjectDashboard.png",
      "/gallery/QueueFlow/TaskDetails.png",
      "/gallery/QueueFlow/CodeTimeLimit.png",
      "/gallery/QueueFlow/CodeGenerated.png",
      "/gallery/QueueFlow/JoinWithProjectCode.png",
      "/gallery/QueueFlow/ManageAccess(PM).png",
    ],
    isFeatured: true,
  },
  {
    id: 5,
    title: "RBAC Analytics Dashboard",
    businessContext: "Multi-role analytics and operations management platform for restaurant environments",
    period: "Jan 2026 – Feb 2026",
    description: "Full-stack RBAC system with secure authentication, financial dashboards, and strict API-level role enforcement. Designed with clean layered architecture and deployed using Supabase and Render.",
    problemSolutionImpact: {
      problem: "Lack of structured role-based access and centralized financial tracking in multi-level restaurant operations",
      solution: "Engineered a secure, role-driven analytics platform with JWT authentication, middleware-based authorization, and data-driven dashboards",
      impact: "Provides role-specific dashboards for Admin, Manager, and Staff with API-level access control"
    },
    techStack: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "JWT Authentication",
      "Middleware-based Authorization",
      "Sequelize",
      "PostgreSQL",
      "Supabase",
      "MVC Architecture",
      "Cross-Origin Resource Sharing",
    ],
    link: "https://role-based-analytics-dashboard.vercel.app/",
    githubRepo: {
      backend: "https://github.com/Anoop-Kumar-31/Role-Based-Analytics-Dashboard_Backend",
      frontend: "https://github.com/Anoop-Kumar-31/Role-Based-Analytics-Dashboard",
      JuctionModuleRepo: "https://github.com/Anoop-Kumar-31/NEXORA-Multi-Tenant-Role-Based-Company-Restaurants-Management-Analytics-Platform"
    },
    project_img: "/gallery/RBAC Analytics Dashboard/RBACAnalyticalDashboard.png",
    category: "Full-Stack",
    startDate: "2026-01",
    gallery: [
      "/gallery/RBAC Analytics Dashboard/signin.png",
      "/gallery/RBAC Analytics Dashboard/dashboard.png",
      "/gallery/RBAC Analytics Dashboard/onboarding.png",
      "/gallery/RBAC Analytics Dashboard/onboarded.png",
      "/gallery/RBAC Analytics Dashboard/user.png",
      "/gallery/RBAC Analytics Dashboard/revenue.png",
      "/gallery/RBAC Analytics Dashboard/expense.png",
      "/gallery/RBAC Analytics Dashboard/Bluebook.png",
      "/gallery/RBAC Analytics Dashboard/users.png",
      "/gallery/RBAC Analytics Dashboard/location.png",
    ],
    isFeatured: true,
  },
  {
    id: 4,
    title: "The Secrets of CHIAROSCURO — Official Novel Website",
    businessContext: "Personal branding and interactive storytelling platform for a supernatural fantasy novel",
    period: "Dec 2025 – Jan 2026",
    description: "Custom-built promotional website for my Wattpad novel 'The Secrets of CHIAROSCURO'. Designed to enhance reader engagement with story exploration, anonymous reviews, and immersive UI experience.",
    problemSolutionImpact: {
      problem: "Web Novels Series often lack personalized branding and reader interaction outside the platform",
      solution: "Built a dedicated novel website to centralize story information, enable anonymous reviews, and strengthen reader engagement",
      impact: "Centralizes story information and enables reader interaction through anonymous reviews"
    },
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Deployment (Vercel)"
    ],
    link: "https://secrets-of-chiaroscuro.vercel.app/",
    githubRepo: "https://github.com/Anoop-Kumar-31/Secrets_of_Chiaroscuro",
    project_img: "/gallery/NovelWebsite/tsocnovel.png",
    category: "Frontend",
    startDate: "2025-12",
    gallery: [
      "/gallery/NovelWebsite/herosection.png",
      "/gallery/NovelWebsite/about.png",
      "/gallery/NovelWebsite/char1.png",
      "/gallery/NovelWebsite/char2.png",
      "/gallery/NovelWebsite/char3.png",
      "/gallery/NovelWebsite/char4.png",
      "/gallery/NovelWebsite/lore.png",
      "/gallery/NovelWebsite/Feedbackandfooter.png",
    ],
  },
  {
    id: 1,
    title: "Blood Donor & Patient Management System",
    businessContext: "Healthcare platform connecting blood donors with patients in need",
    period: "May 2023 – Aug 2023",
    description: "Full-stack platform connecting donors and patients. Upgraded with clean MVC backend architecture, integration of 2,800+ real government blood banks (data.gov.in), secure OTP verification, and a responsive Tailwind UI.",
    problemSolutionImpact: {
      problem: "Lack of centralized real-time information for blood availability and authenticated donors",
      solution: "Built a scalable automated platform with real-time geographical donor matching, secure email OTP auth, and 2,800+ searchable government blood banks",
      impact: "Reduces search time for blood donors by centralizing verified government blood bank data and authenticated donor information"
    },
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose ODM", "REST APIs", "Nodemailer", "MVC Architecture", "OTP Authentication", "Cross-Origin Resource Sharing"],
    link: "https://blood-management-system-frontend-rosy.vercel.app/",
    githubRepo: {
      frontend: "https://github.com/Anoop-Kumar-31/Blood_Management_System_Frontend",
      backend: "https://github.com/Anoop-Kumar-31/Blood_Management_System_Backend",
      JuctionModuleRepo: "https://github.com/Anoop-Kumar-31/HeartBeat-Connecting-Donors-Saving-Lives-and-Finding-Blood-Banks"
    },
    project_img: "/gallery/BloodManagementSystem/heartbeat.png",
    category: "Full-Stack",
    startDate: "2023-05",
    gallery: [
      "/gallery/BloodManagementSystem/HomePage.png",
      "/gallery/BloodManagementSystem/EmailVerification.png",
      "/gallery/BloodManagementSystem/OTPEmail.png",
      "/gallery/BloodManagementSystem/BloodBank.png",
    ],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Amazon Clone",
    businessContext: "E-commerce platform for online shopping with cart and account creation",
    period: "June 2024 – Nov 2024",
    description: "Full-featured e-commerce marketplace built with Next.js, Firebase authentication, and MongoDB. Includes product browsing, cart management, and secure checkout flow.",
    problemSolutionImpact: {
      problem: "Small businesses need affordable e-commerce solutions to sell products online",
      solution: "Built scalable marketplace with secure authentication, real-time cart, and payment integration",
      impact: "Demonstrates core e-commerce functionality including product browsing, cart management, and user authentication"
    },
    techStack: ["Next.js", "Firebase Authentication", "Tailwind CSS", "Vercel"],
    link: "https://anoopsamazon.vercel.app/",
    githubRepo: "https://github.com/Anoop-Kumar-31/myamazonclone",
    project_img: "/gallery/AmazonClone/Home.png",
    category: "Frontend",
    startDate: "2024-06",
    gallery: [
      "/gallery/AmazonClone/Home.png",
      "/gallery/AmazonClone/Cart.png",
      "/gallery/AmazonClone/Signin.png",
    ],
  },
  {
    id: 3,
    title: "AutoBack Website",
    businessContext: "Corporate website for AI/ML service provider showcasing solutions and capabilities",
    period: "Feb 2024 – Apr 2024",
    description: "Custom-designed corporate website for an AI/ML service provider with modern UI, service showcases, and lead generation forms.",
    problemSolutionImpact: {
      problem: "AI/ML company needed professional web presence to establish market credibility",
      solution: "Designed and developed unique, modern website showcasing services and technical capabilities",
      impact: "Created professional brand presence with service showcases and lead generation forms"
    },
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://autoback-7van.onrender.com/",
    githubRepo: "https://github.com/Anoop-Kumar-31/AutoBack2_0",
    project_img: "/gallery/AutoBack/AutoBackHero.png",
    category: "Frontend",
    startDate: "2024-02",
    gallery: [
      "/gallery/AutoBack/AutoBackHero.png",
      "/gallery/AutoBack/AutoBackService.png",
      "/gallery/AutoBack/AutoBackClients.png",
      "/gallery/AutoBack/AutoBackTech.png",
      "/gallery/AutoBack/AutoBackBusiness.png",
      "/gallery/AutoBack/AutoBackWorks.png",
      "/gallery/AutoBack/AutoBackAboutAndContact.png",
    ],
  },
];
