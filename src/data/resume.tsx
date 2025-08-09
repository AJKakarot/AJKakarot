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
    "I'm a Founding Engineer driven by building products that scale to lakhs of users. I've shipped over 10 commercial projects and have consistently placed as a winner or finalist in 8 national hackathons, a testament to my ability to deliver creative, high-impact solutions under extreme pressure. My mission is to architect scalable, production-grade software from ambitious ideas.",
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
        "Built a multi-tenant SaaS for Reddit automation with an AI content engine, smart scheduling, and real-time keyword tracking. Powered by a producer-consumer backend for async processing and a Next.js dashboard with live analytics and updates.",
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
        "Created a real-time AI platform that spots and tackles online harassment, with automated evidence capture and an easy-to-use dashboard for live insights.",
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
        "Built to solve the biggest bottleneck in cold outreach: slow, manual personalization and repetitive prompting. I engineered a full-stack system where users set up their professional profile once. The Node.js backend then synthesizes this saved context with recipient details, using a sophisticated prompt strategy to have the Google Gemini API generate hyper-personalized emails instantly, making outreach significantly faster.",
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
        "Launched a data-driven interview platform that serves real questions ranked by frequency from over 200 top tech companies. Its standout feature is a generative AI 'Problem Solver,' engineered to give users contextual, non-spoiler hints to guide their learning on difficult problems. The responsive UI, built with Tailwind CSS and Framer Motion, provides a seamless experience for data exploration and progress tracking.",
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
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
