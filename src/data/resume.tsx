import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

const github = (href: string) => ({
  type: "GitHub",
  href,
  icon: <Icons.github className="size-3" />,
});

const demo = (href: string) => ({
  type: "Live demo",
  href,
  icon: <Icons.globe className="size-3" />,
});

export const DATA = {
  name: "Ajeet Gupta",
  initials: "AG",
  url: "https://ajeetgupta.com",
  location: "Kanpur, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Kanpur",
  description:
    "Full-stack developer building production SaaS, microservices, and AI-powered platforms.",
  summary:
    "I'm Ajeet, a **Full Stack Developer** building scalable products with **React, Next.js, Node.js, Spring Boot**, and cloud-native infrastructure. I've shipped **10+ production projects**, architected **microservices** with JWT, Redis, Kafka, and PostgreSQL, and built **AI-powered platforms** using LangChain, RAG, and Groq. Beyond product work, I've solved **1,600+ DSA problems**, reached a **1681 LeetCode rating**, earned **Institute Rank 1** on GeeksforGeeks, and maintained a **365-day coding streak**. I'm a **5× hackathon winner**, including CodeMatrix Genesis and ArcticX TechSprint, and I build with LLMs, LangGraph, and AI agents.",
  avatarUrl: "/me.png",
  skills: [
    {
      category: "Languages & Frontend",
      items: ["TypeScript", "JavaScript", "C/C++", "Java", "Python", "SQL", "React.js", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
      category: "Backend & Data",
      items: ["Node.js", "Express.js", "Spring Boot", "Spring Security", "FastAPI", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "JPA / Hibernate"],
    },
    {
      category: "Cloud, DevOps & AI",
      items: ["AWS (EC2, S3)", "Docker", "GitHub Actions", "Linux", "Nginx", "Kafka", "LangChain", "LangGraph", "RAG", "Qdrant", "Groq AI"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@2301661530002", icon: Icons.globe, label: "Medium" },
  ],
  contact: {
    email: "gajeet031@gmail.com",
    tel: "+918840713812",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/AJKakarot", icon: Icons.github, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/ajeet-gupta-99aa6b281/", icon: Icons.linkedin, navbar: true },
      X: { name: "X", url: "https://x.com/butter69168", icon: Icons.x, navbar: true },
      WhatsApp: { name: "WhatsApp", url: "https://wa.me/918840713812", icon: Icons.whatsapp, navbar: true },
      medium: { name: "Medium", url: "https://medium.com/@2301661530002", icon: Icons.globe, navbar: false },
    },
  },
  work: [
    {
      company: "TMRW (Aditya Birla Group)", href: "/tmrw-offer-letter.pdf", badges: ["Offered"], location: "Bangalore",
      title: "Software Engineering Intern", logoUrl: "/tmrw.jpg", start: "Jun 2026", end: "Jun 2027",
      description: "Selected for a year-long internship at Aditya Birla Digital Fashion Ventures (TMRW), Bangalore. Unable to join because of university NOC constraints.",
    },
    {
      company: "GeeksforGeeks", href: "https://media.geeksforgeeks.org/auth-certificates/1768761000/7027f80d5f42a2b5ddd3a4ca37ea135a.png", badges: [], location: "Remote · Kanpur",
      title: "Campus Mantri", logoUrl: "/gfg-campus-mantri.png", start: "Jan 2026", end: "Jun 2026",
      description: "Led campus events, encouraged GeeksforGeeks learning adoption, and served as a liaison between students and the community.",
    },
    {
      company: "IBM", href: "https://courses.ibmmooc.skillsnetwork.site/certificates/b6d821ef9815425b8013f317145d147e", badges: [], location: "Remote",
      title: "Cloud Computing Virtual Intern", logoUrl: "/ibm.png", start: "Feb 2026", end: "Mar 2026",
      description: "Learned IBM Cloud and AWS fundamentals across IaaS, PaaS, SaaS, virtualization, containers, Docker, Linux, and shell-based deployment workflows.",
    },
    {
      company: "Modulus", href: "https://www.trymodulus.com", badges: [], location: "Remote",
      title: "Full-Stack Development Intern", logoUrl: "/modulus.png", start: "Aug 2025", end: "Nov 2025",
      description: "Shipped features with React, Node, and Express; built JWT APIs with role-based access; and worked on MongoDB and SQL schemas, indexes, and query tuning.",
    },
    {
      company: "Code Inbound LLP", href: "https://www.codeinbound.com", badges: [], location: "Remote",
      title: "Frontend Developer Intern", logoUrl: "/codeinbound.jpg", start: "Jul 2025", end: "Aug 2025",
      description: "Built responsive UI components and front-end features with React, JavaScript, and modern tooling.",
    },
    {
      company: "CodSoft", href: "https://www.codsoft.in", badges: [], location: "Remote",
      title: "Web Development Intern", logoUrl: "/codsoft.jpg", start: "Apr 2025", end: "May 2025",
      description: "Built responsive web interfaces and front-end features using HTML, CSS, JavaScript, and modern development practices.",
    },
    {
      company: "E-Cell, AITD", href: "https://ecelldraitd.in", badges: [], location: "On-site",
      title: "Technical Coordinator & Backend Engineer", logoUrl: "/aitd.jpeg", start: "Sep 2024", end: "Present",
      description: "Built the NextHire backend as five microservices—Auth, User, Job, Payment, and Utils—using Node, Express, and TypeScript, with JWT, PostgreSQL, Kafka, Redis, Cloudinary, Razorpay, and Gemini-powered career tools.",
    },
  ],
  education: [
    {
      school: "Dr. Ambedkar Institute of Technology for Divyangjan", href: "https://aitd.ac.in",
      degree: "B.Tech, CSE (AI & ML) · CGPA: 7.6", logoUrl: "/aitd.jpeg", start: "Sep 2023", end: "Aug 2027",
    },
  ],
  liveSites: [
    {
      title: "NextHire", href: "https://nexthires.app/", dates: "Live",
      description: "AI job portal for discovery, applications, recruiter workflows, and career guidance.",
      technologies: ["Next.js", "PostgreSQL", "Redis", "Groq AI"],
      links: [demo("https://nexthires.app/"), github("https://github.com/AJKakarot/next-hires")],
    },
    {
      title: "Cashly", href: "https://cashly-springboot.vercel.app/", dates: "Live",
      description: "AI-powered finance platform for transactions, debts, budgets, and investments with multilingual voice input.",
      technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Groq AI"],
      links: [demo("https://cashly-springboot.vercel.app/"), github("https://github.com/AJKakarot/cashly")],
    },
    {
      title: "SehatLink", href: "https://sehat-link-nidm.vercel.app/", dates: "Live",
      description: "Telemedicine platform for doctor discovery, bookings, video consultations, and safety-limited symptom guidance.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
      links: [demo("https://sehat-link-nidm.vercel.app/"), github("https://github.com/AJKakarot/SehatLink")],
    },
  ],
  projects: [
    {
      title: "NextHire — AI Job Portal", href: "https://nexthires.app/", dates: "2026", active: true,
      description: "Full-stack AI job portal with job discovery, applications, recruiter workflows, and career guidance. Includes JWT auth, Razorpay payments, Cloudinary uploads, and Groq AI.",
      technologies: ["Next.js 16", "TypeScript", "PostgreSQL", "Redis", "Groq AI", "Razorpay", "Cloudinary"],
      links: [demo("https://nexthires.app/"), github("https://github.com/AJKakarot/next-hires")], image: "", video: "/reusme.MP4",
    },
    {
      title: "Cashly — AI Finance Platform", href: "https://cashly-springboot.vercel.app/", dates: "2026", active: true,
      description: "AI-powered finance platform for transaction, debt, budget, and investment management, with multilingual voice-to-transaction processing using Groq Whisper.",
      technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Spring Security", "Groq AI", "JPA / Hibernate"],
      links: [demo("https://cashly-springboot.vercel.app/"), github("https://github.com/AJKakarot/cashly")], image: "", video: "",
    },
    {
      title: "MERN Authentication", href: "https://github.com/AJKakarot/Mern-Authentication", dates: "Jan 2026", active: true,
      description: "MERN authentication with email verification and OTP, JWT access and refresh tokens, httpOnly cookies, Redis sessions, CSRF protection, and user/admin RBAC.",
      technologies: ["MongoDB", "Express.js", "React 19", "Node.js", "Redis", "JWT"],
      links: [github("https://github.com/AJKakarot/Mern-Authentication")], image: "/mern.png", video: "",
    },
    {
      title: "SehatLink", href: "https://sehat-link-nidm.vercel.app/", dates: "Dec 2025", active: true,
      description: "Telemedicine platform with doctors, bookings, video consultations, REST APIs, RBAC, PostgreSQL and Prisma, plus safety-limited Gemini symptom guidance.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Google Gemini API"],
      links: [demo("https://sehat-link-nidm.vercel.app/"), github("https://github.com/AJKakarot/SehatLink")], image: "", video: "/sehat.MP4",
    },
    {
      title: "CashTrackr", href: "https://cash-trackr-rllkic01y-ajeets-projects-0160f38e.vercel.app", dates: "Nov 2025", active: true,
      description: "Finance dashboard with Gemini spend insights, powered by Next.js, Prisma, MongoDB, and Vercel.",
      technologies: ["Next.js 15", "React", "Tailwind CSS", "Prisma", "MongoDB", "Gemini"],
      links: [demo("https://cash-trackr-rllkic01y-ajeets-projects-0160f38e.vercel.app"), github("https://github.com/AJKakarot/Cash_Trackr")], image: "", video: "/ccashtrakerrr.MP4",
    },
    {
      title: "studyMeet", href: "https://study-meet.vercel.app/", dates: "Nov 2025", active: true,
      description: "MERN learning platform with a course catalog, enrollments, Razorpay checkout, JWT sessions, and role-based access control.",
      technologies: ["MongoDB", "Express.js", "React 18", "Node.js", "Redux Toolkit", "Razorpay"],
      links: [demo("https://study-meet.vercel.app/"), github("https://github.com/AJKakarot/studyMeet")], image: "/studymeet.png", video: "",
    },
  ],
  hackathons: [
    {
      title: "FinSpark 2026 — Best Performing Team", dates: "Sep 2026", location: "India",
      description: "Contributed remotely as a Backend Developer for Team Aithians, working on the backend development of our FinSpark 2026 solution. The team received the Best Performing Team recognition along with a ₹1,00,000 cash prize.", image: "/finspark.jpeg",
      links: [{ title: "Details", icon: <Icons.globe className="size-4" />, href: "https://lnkd.in/p/dK5DCM79" }],
    },
    {
      title: "JAGRANPRENEURS Hackathon 2026 — Winner", dates: "Aug 2026", location: "India",
      description: "Backend developer for Team SSBCoreAI, building APIs and AI-driven features for an SSB preparation platform.", image: "/ssbcoreai.jpg",
      links: [{ title: "Details", icon: <Icons.globe className="size-4" />, href: "https://lnkd.in/p/d8VMY5_r" }],
    },
    {
      title: "CodeMatrix: Genesis Hackathon — Winner", dates: "2025", location: "India",
      description: "Won among 500+ participants by shipping a complete solution under hackathon constraints.", image: "/codematrix-hackathon.png",
      links: [{ title: "Details", icon: <Icons.globe className="size-4" />, href: "https://www.linkedin.com/posts/ajeet-gupta-99aa6b281_hackathon-hackathonwinner-codematrixgenesis-activity-7406412266633388034-dSpO" }],
    },
    {
      title: "ArcticX Winter TechSprint — Winner", dates: "Jan 2026", location: "India",
      description: "Won a 300+ participant competition after delivering a working product on a tight deadline.", image: "/arcticx-hackathon.png",
      links: [{ title: "Details", icon: <Icons.globe className="size-4" />, href: "https://www.linkedin.com/posts/ajeet-gupta-99aa6b281_arcticx-hackathonwinner-2xwinner-activity-7423265017933905920-cdLF" }],
    },
  ],
} as const;
