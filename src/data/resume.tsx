import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Divyansh",
  initials: "DS",
  url: "https://divyansharma.com",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi",
  description:
    "Software Engineer scaling products to lakhs of users. 8x National Hackathon Winner / Finalist. Expert in Full Stack, AWS, and GenAI.",
  summary:
    "I'm a **Founding Engineer** driven by building products that scale to **lakhs of users**. I've shipped over **10 commercial projects** and have consistently placed as a **winner or finalist in 8 national hackathons**, a testament to my ability to deliver creative, **high-impact solutions under extreme pressure**. My mission is to architect **scalable, production-grade software** from ambitious ideas.",
  avatarUrl: "/me.png",
  skills: [
    // Core Stack
    "Next.js",
    "Node.js",
    "AWS",
    // AI Superpower
    "GenAI",
    "Langchain",
    "RAG", // From your winning project - a key modern skill
    // Essential Tech
    "TypeScript",
    "Docker",
    "PostgreSQL",
    "Redis",
    "CI/CD (GitHub Actions)",
    "Prisma",
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
      company: "MarkupX",
      href: "https://www.markupxbrands.com", // TODO: Add company URL if different
      badges: [],
      location: "Onsite",
      title: "Founding Engineer",
      logoUrl: "/markupX.png", // TODO: Add logo
      start: "Aug 2025",
      end: "Present",
      description:
        "As a founding engineer, I architected and deployed scalable backend systems designed to handle lakhs of concurrent users. My code directly supported the company's rapid growth phase, ensuring high performance and reliability as we expanded our user base.",
    },
     {
      company: "Modulus",
      href: "http://trymodulus.com",
      badges: [],
      location: "Remote",
      title: "Founding Full-Stack Engineer",
      logoUrl: "/modulus.png", // TODO: Add logo
      start: "April 2025",
      end: "August 2025",
      description:
        "Scaled to 1,000+ DAU by architecting a full-stack AI platform. Cut latency with a Redis/Cloudflare cache (82% hit ratio) and built a GenAI recommendation engine using Langchain.",
    },
   {
      company: "Showtime",
      badges: [],
      href: "https://sureball.net/",
      location: "Remote",
      title: "Backend Engineer Intern",
      logoUrl: "/showtime.png", // TODO: Add logo
      start: "Feb 2025",
      end: "June 2025",
      description:
        "Tasked with expanding B2B services by integrating new third-party APIs. Responsibilities include bolstering system reliability, improving test coverage, and safeguarding data integrity for all business clients by re-architecting backend services.",
    },
    {
      company: "Code Inbound LLP",
      badges: [],
      href: "https://www.codeinbound.com",
      location: "Remote",
      title: "Frontend Engineer Intern",
      logoUrl: "/codeinbound.png", // TODO: Add logo
      start: "Sep 2024",
      end: "Feb 2025",
      description:
        "Responsible for building a real-time monitoring UI for a large-scale Network Management System. Key objectives include enhancing application performance and stability by refactoring core components and resolving 20+ critical bugs.",
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
        "Engineered the startup's core product: an end-to-end QR ordering system using the MERN stack. Shipped a full-stack table reservation feature with Express APIs and a React/Redux frontend, directly improving partner restaurants' operational efficiency.",
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
        "Built a **multi-tenant SaaS** for Reddit automation with an **AI content engine**, smart scheduling, and **real-time keyword tracking**. Powered by a **producer-consumer backend** for async processing and a **Next.js dashboard** with live analytics and updates.",
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
        "Created a **real-time AI platform** that spots and tackles **online harassment**, with **automated evidence capture** and an **easy-to-use dashboard** for live insights.",
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
        "Built to solve the **biggest bottleneck in cold outreach**: slow, manual personalization and repetitive prompting. I engineered a **full-stack system** where users set up their **professional profile once**. The **Node.js backend** then synthesizes this saved context with recipient details, using a **sophisticated prompt strategy** to have the **Google Gemini API** generate **hyper-personalized emails instantly**, making outreach **significantly faster**.",
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
        "Launched a **data-driven interview platform** that serves **real questions ranked by frequency** from over **200 top tech companies**. Its standout feature is a **generative AI 'Problem Solver,'** engineered to give users **contextual, non-spoiler hints** to guide their learning on difficult problems. The **responsive UI**, built with **Tailwind CSS and Framer Motion**, provides a **seamless experience** for data exploration and progress tracking.",
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
          title: "Organization",
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
          title: "Streamer Source",
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
