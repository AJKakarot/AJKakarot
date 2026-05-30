import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Divyansh",
  initials: "DS",
  url: "https://divyansharma.com",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi",
  description:
    "Full Stack Developer (GenAI, DevOps, Next.js/React Native, Scalable Systems) | 10+ Production Products | 8x National Hackathon Winner/Finalist",
  summary:
    "I'm Divyansh, a **Product Engineer** who builds GenAI, full-stack platforms, and the DevOps that keeps them upright. I do this for a living, and apparently for hackathon weekends too (**10 wins or finals so far**, most powered by bad sleep and worse decisions). Two years in, that's **10+ shipped products and 2,500+ paying customers**. I thrive in the chaos of startups, where I can wear all the hats and solve problems end-to-end. If I'm not coding, I'm probably planning my next project or trying to convince people that AI is going to change everything (because it is).",
  avatarUrl: "/me.png",
  skills: [
    {
      category: "Languages & Frontend",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "C/C++",
        "SQL",
        "React.js",
        "Next.js",
        "Redux",
        "Tailwind",
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "Celery",
        "BullMQ",
        "PostgreSQL",
        "Redis",
        "MongoDB",
        "MySQL",
        "DynamoDB",
        "Prisma",
        "Drizzle",
        "Pydantic",
      ],
    },
    {
      category: "Cloud, DevOps & AI",
      items: [
        "AWS EC2/S3/ECS/ECR/SQS",
        "Cloudflare",
        "Docker",
        "Git",
        "GitHub Actions",
        "Nginx",
        "PM2",
        "CloudWatch",
        "Supabase",
        "Langchain",
        "RAG",
        "Embeddings",
        "Vector Search",
        "OpenSearch/AOSS",
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "connectwithdivyansharma@gmail.com",
    tel: "+919305441885",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/divyansharma001",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/divyansharma001",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/divyansharma001", // TODO: Add your X/Twitter handle
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:connectwithdivyansharma@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      calendar: {
        name: "Book a Meeting",
        url: "https://cal.com/divyansharma", // TODO: Replace with your actual Cal.com URL
        icon: Icons.calcom,
        navbar: true,
      },
    },
  },

  work: [
     {
      company: "SalesDuo Inc",
      href: "https://www.salesduo.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/SalesDuoLogo.png",
      start: "March 2026",
      end: "Present",
      description:
        "Building features across a multi-service architecture: a multi-tenant SaaS core (Express, TypeScript, Sequelize) and an LLM-powered listings and brand-store optimizer (Python) behind a shared nginx gateway. Shipped end to end on AWS (ECS, ALB, RDS Postgres, Redis) with GitHub Actions CI/CD. Cut LLM cost and latency by reusing analyzed context across pipeline stages, designed steps to fail gracefully so one bad scrape or LLM call won't crash a run, and delivered a PRD-driven brand-store generation feature from schema and migrations through multi-stage content generation.",
    },
     {
      company: "MarkupX Brands",
      href: "https://www.markupxbrands.com",
      badges: [],
      location: "Onsite",
      title: "Full Stack AI Engineer, System Architecture",
      logoUrl: "/markupX.png",
      start: "Aug 2025",
      end: "Dec 2025",
      description:
        "Shipped an enterprise GenAI platform with 12+ AI features like Virtual Try-On and Face Swap. Cut generation latency 40% with GPU processing, dropped re-renders 70% with Zustand, scaled to 100M+ records on MongoDB and Cloudflare D1, and integrated 40+ APIs including FAL.ai and Razorpay.",
    },
     {
      company: "Modulus",
      href: "http://trymodulus.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Development, Technical Ownership, Scalable Architecture",
      logoUrl: "/modulus.png",
      start: "April 2025",
      end: "August 2025",
      description:
        "Scaled infra through 10x user growth (500+ active). 82% cache hit via Redis + Cloudflare, CI/CD on autopilot. Built an AI recommender (Langchain, Gemini) and zero-touch bookings on Razorpay and Cal.com with resilient background jobs.",
    },
   {
      company: "Showtime",
      badges: [],
      href: "https://sureball.net/",
      location: "Remote",
      title: "Backend Development, API Integration, System Reliability",
      logoUrl: "/showtime.png",
      start: "Feb 2025",
      end: "June 2025",
      description:
        "Integrated third-party game provider APIs for B2B expansion. Refactored flaky backend paths so partner platforms stopped paging.",
    },
    {
      company: "Code Inbound LLP",
      badges: [],
      href: "https://www.codeinbound.com",
      location: "Remote",
      title: "Frontend Engineering, Performance Optimization",
      logoUrl: "/codeinbound.png",
      start: "Sep 2024",
      end: "Feb 2025",
      description:
        "Built data-driven UI for a large Network Management System (React, Redux, TS). Tightened frontend perf with component and state refactors, closed out 20+ critical bugs.",
    },
    {
      company: "instoQR",
      href: "https://www.linkedin.com/company/instoqr",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer Intern",
      logoUrl: "/instoqr.png", // TODO: Add instoQR logo
      start: "Jun 2024",
      end: "Sep 2024",
      description:
        "Built the startup's core QR ordering system on MERN. Shipped a full-stack table reservation feature so partner restaurants could turn tables faster.",
    },
    
  ],
  education: [
    {
      school: "Maharaja Surajmal Institute of Technology",
      href: "http://msit.in/",
      degree: "B.Tech, Information Technology (CGPA: 8.8)",
      logoUrl: "/msit.png", // TODO: Add logo
      start: "2023",
      end: "2027",
    },
    {
      school: "Geek Room MSIT Chapter",
      href: "https://www.geekroom.in/",
      degree: "Head of Development (Community of 25,000+)",
      logoUrl: "/geekroom.png", // TODO: Add logo
      start: "Sept 2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Supereddit - AI Reddit Automation Platform",
      href: "http://supereddit.com",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Multi-tenant SaaS for Reddit automation: AI content engine, smart scheduling, real-time keyword tracking. Producer-consumer backend handles async jobs; Next.js dashboard streams live analytics.",
       technologies: [
        "Next.js", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "AWS", "Docker", "GenAI (LangChain)", "WebSockets", "Recharts",
      ],
      links: [
        {
          type: "Website",
          href: "https://supereddit.com",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "",
      video: "https://player.vimeo.com/video/1103520256?background=1&autoplay=1&loop=1&muted=1",
    },
    {
      title: "Safire - AI Harassment Detection Platform",
      href: "https://safire-five.vercel.app",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Real-time AI platform that flags online harassment, captures evidence automatically, and surfaces it through a clean dashboard.",
           technologies: [
        "Next.js", "RAG", "Redis", "Docker", "Node.js", "MongoDB", "Puppeteer", "Prisma",
      ],

      links: [
        {
          type: "Website",
          href: "https://safire-five.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/divyansharma001/Safire",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://player.vimeo.com/video/1059208124?background=1&autoplay=1&loop=1&muted=1",
    },
    
    {
      title: "ReachRight - AI Cold Email Assistant",
      href: "https://reach-right-person.vercel.app",
      dates: "June 2025",
      active: true,
      description:
        "Kills the slowest part of cold outreach: manual personalization. Set up your profile once; the Node backend fuses it with recipient context and Gemini drafts a hyper-personalized email in seconds.",
     technologies: [
    "Next.js", "Node.js", "TypeScript", "Google Gemini API",
  ],
      links: [
        {
          type: "Website",
          href: "https://reach-right-person.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/divyansharma001/ReachRight",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://player.vimeo.com/video/1108707330?background=1&autoplay=1&loop=1&muted=1",
    },
    {
      title: "CrackIt - AI-Driven Interview Platform",
      href: "https://dub.sh/jobrush",
      dates: "April 2025",
      active: true,
      description:
        "Interview prep platform serving real questions ranked by frequency across 200+ tech companies. Standout feature: an AI 'Problem Solver' that gives contextual hints without spoiling the answer.",
      technologies: [
    "React", "TypeScript", "Node.js", "Generative AI", "Tailwind CSS", "Framer Motion",
  ],
      links: [
        {
          type: "Website",
          href: "https://dub.sh/jobrush",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/divyansharma001/Crackit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://player.vimeo.com/video/1108710945?background=1&autoplay=1&loop=1&muted=1",
    },
  ],
  liveSites: [
    {
      title: "LookTara",
      href: "https://looktara.com",
      dates: "Live",
      description: "AI personal photographer turning everyday snaps into studio-quality, ultra-realistic photos. Platform-specific styles (LinkedIn, Tinder), natural lighting, full privacy controls.",
      technologies: ["Next.js", "Tailwind", "Node.js", "Razorpay"],
      links: [
        { type: "Visit", href: "https://looktara.com", icon: <Icons.globe className="size-3" /> },
      ],
    },
    {
      title: "Modulus",
      href: "https://trymodulus.com",
      dates: "Live",
      description: "AI-first ops platform: booking automation, recommendations, observability dashboards.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      links: [
        { type: "Visit", href: "https://trymodulus.com", icon: <Icons.globe className="size-3" /> },
      ],
    },
    {
      title: "Supereddit",
      href: "https://supereddit.com",
      dates: "Live",
      description: "AI Reddit automation SaaS: viral post generation, scheduling, keyword tracking, subreddit discovery, live engagement analytics.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      links: [
        { type: "Visit", href: "https://supereddit.com", icon: <Icons.globe className="size-3" /> },
      ],
    },
    {
      title: "She Builds Ecosystem",
      href: "https://shebuildsecosystem.com",
      dates: "Live",
      description: "Community hub for women founders. Lead capture, CMS storytelling, event highlights.",
      technologies: ["Next.js", "Tailwind", "CMS"],
      links: [
        { type: "Visit", href: "https://shebuildsecosystem.com", icon: <Icons.globe className="size-3" /> },
      ],
    },
    {
      title: "Chic Avenue",
      href: "https://chicavenue.in",
      dates: "Live",
      description: "Fashion ecommerce: optimized PLP/PDP flow, payments, order notifications.",
      technologies: ["Next.js", "Tailwind", "Razorpay"],
      links: [
        { type: "Visit", href: "https://chicavenue.in", icon: <Icons.globe className="size-3" /> },
      ],
    },
    {
      title: "Vikram Design Studio",
      href: "https://vikramdesignstudio.com",
      dates: "Live",
      description: "Portfolio site with case studies and fast image delivery for a design studio.",
      technologies: ["Next.js", "Tailwind", "Image CDN"],
      links: [
        { type: "Visit", href: "https://vikramdesignstudio.com", icon: <Icons.globe className="size-3" /> },
      ],
    },
    {
      title: "Buzzy Bees",
      href: "https://buzzy-bees.com",
      dates: "Live",
      description: "Kids brand storefront: playful UI, fast navigation, mobile-first checkout.",
      technologies: ["Next.js", "Tailwind", "Payments"],
      links: [
        { type: "Visit", href: "https://buzzy-bees.com", icon: <Icons.globe className="size-3" /> },
      ],
    },
    {
      title: "Muskan Charitable Trust",
      href: "https://muskancharitabletrust.org",
      dates: "Live",
      description: "Donation site with transparent impact sections, contact flows, and secure payments.",
      technologies: ["Next.js", "Tailwind", "Payments"],
      links: [
        { type: "Visit", href: "https://muskancharitabletrust.org", icon: <Icons.globe className="size-3" /> },
      ],
    },
    {
      title: "Villa DMC",
      href: "https://villadmc.com",
      dates: "Live",
      description: "Villa booking site: inquiry flows, media galleries, lead routing into CRM.",
      technologies: ["Next.js", "Tailwind", "Node.js"],
      links: [
        { type: "Visit", href: "https://villadmc.com", icon: <Icons.globe className="size-3" /> },
      ],
    },
  ],

  hackathons: [
    
    {
      title: "Echo - AI-Powered Code Verification",
      dates: "March 2025",
      location: "Jaipur, India",
      description:
        "AI-driven tool verifies project authenticity, detects deep code plagiarism, and assesses code quality for fair evaluations.",
      image:
        "",
      mlh: "",
      links: [{
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/divyansharma001/echo-manipal",
      },],
    },
    {
      title: "Safire - AI Harassment Detection Platform",
      dates: "Feb 2025",
      location: "New Delhi, India",
      description:
        "AI-powered harassment detection system for monitoring social media DMs.",
      image:
        "",
      mlh: "",
      links: [{
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/divyansharma001/Safire",
      },],
    },
    {
      title: "PathVest - AI Financial Advisor",
      dates: "Nov 2024",
      location: "New Delhi, India",
      description:
        "Personal Financial Guide with modern UI.",
      image:
        "",
      mlh: "",
      links: [{
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/divyansharma001/hackathonCBS",
      },],
    },
    {
      title: "PMMMS",
      dates: "Sept 2024",
      location: "New Delhi, India",
      description:
        "Platform for J&K students to submit scholarship forms. (SIH 2024)",
      icon: "public",
      image:
        "",
      links: [{
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/divyansharma001/pmss",
      },],
    },
    {
      title: "Pranapulse",
      dates: "June 2024",
      location: "New Delhi, India",
      description:
        "Developed a Personal Yoga Guide with AI integration.",
      image:
        "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/divyansharma001/pranaPulse",
        },
      ],
    },
    {
      title: "BloodLink",
      dates: "Jan 2024",
      location: "Delhi, India",
      description:
        "Developed a Solution for blood shortage problems.",
      image:
        "",
      win: "",
      mlh: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
      ],
    },
    {
      title: "WhisperLink",
      dates: "Sep 2024",
      location: "Delhi, India",
      description:
        "Developed a Anonymous messaging platform supporting 1000+ users with Gemini AI integration.",
      image:
        "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/divyansharma001/WhisperLink",
        },
      ],
    },
    {
      title: "Hive",
      dates: "June 2024",
      location: "Delhi, India",
      description:
        "Full-stack social media platform with REST APIs and efficient state management.",
      image:
        "",
      mlh: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/divyansharma001/hive",
        },
        
      ],
    },
    {
      title: "FoodFly",
      dates: "March 2024",
      location: "Delhi, India",
      description:
        "Developed an E-commerce platform for food delivery with secure payments.",
      image:
        "",
      mlh: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/divyansharma001/FoodFly",
        },
      ],
    },
    {
      title: "LeetAid",
      dates: "Sep 2024",
      location: "Delhi, India",
      description:
        "Developed a platform which provides hints for LeetCode questions.",
      image:
        "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/divyansharma001/LeetAid-FE",
        },
      ],
    },
    {
      title: "Auth",
      dates: "Oct 2024",
      location: "Delhi, India",
      description:
        "Developed a one-step Next-Auth with Prisma setup.",
      image:
        "",
      win: "",
      links: [
       
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/divyansharma001/Auth",
        },
      ],
    },
    {
      title: "CypherCraft",
      dates: "Aug 2024",
      location: "Delhi, India",
      description:
        "Developed a Modern Edtech Platform.",
      image:
        "",
      links: [{
        title: "Source",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/divyansharma001/CypherCraft",
      },],
    },
    {
      title: "Blog-App",
      dates: "May 2024",
      location: "Toronto, Ontario",
      description:
        "Developed a Platform for writing and sharing blogs.",
      image:
        "",
      win: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/divyansharma001/blogProject",
        },
      ],
    },
    {
      title: "UV Protect",
      dates: "Dec 2023",
      location: "Delhi, India",
      description: "Developed a UV protection app which provides UV data based on location.",
      image:
        "",
      win: "",
      links: [
    
            {
              title: "Source",
              icon: <Icons.github className="h-4 w-4" />,
              href: "https://github.com/divyansharma001/uvProtect",
            },
      ],
    },
    {
      title: "Music Player",
      dates: "May 2023",
      location: "Delhi, India",
      description: "Developed a Music Player mobile app with a modern UI.",
      image:
        "",
      links: [{
        title: "Source",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/divyansharma001/musicPlayer",
      },],
    },
    
  ],
} as const;
