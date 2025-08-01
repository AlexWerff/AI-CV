export const profileData = {
  hero: {
    name: "Alexander van der Werff",
    title: "Technical Lead & Founding Engineer",
    location: "Hamburg, Germany",
    email: "alex@softrocket.net",
    github: "https://github.com/alexweff",
    linkedin: "https://linkedin.com/in/alexander-van-der-werff",
  },

  about: {
    content: `I&apos;m a seasoned Technical Lead and Founding Engineer with a knack for turning ambitious ideas into robust, scalable software. From building platforms from scratch (like SUBBD, hitting $10k revenue in 3 weeks) to leading critical migrations (3RM.co&apos;s AWS transition) and optimizing complex systems (MOIA&apos;s 30x speed boost with Rust), I thrive on technical challenges. My journey spans full-stack development, mobile apps (iOS/Android for FenSens, Litpic, Orgadata), backend systems, and cloud infrastructure across diverse industries, including fraud prevention (RISK IDENT) and retail analytics (Phlint, serving Google, AT&T, Nespresso). I&apos;m passionate about crafting high-quality solutions and constantly exploring new tech. And yes, I&apos;m always up for a good hackathon – especially if there&apos;s beer 🍺 and pizza 🍕 involved!`,
  },

  currentTechnologies: [
    { name: "TypeScript", icon: "⚡", category: "Programming Languages" },
    { name: "Next.js", icon: "▲", category: "Frameworks & Libraries" },
    { name: "React.js", icon: "⚛️", category: "Frameworks & Libraries" },
    { name: "Node.js", icon: "🟢", category: "Frameworks & Libraries" },
    { name: "PostgreSQL", icon: "🐘", category: "Databases & Data" },
    { name: "AWS", icon: "☁️", category: "Hosting & Infrastructure" },
    { name: "GCP", icon: "🌐", category: "Hosting & Infrastructure" },
    { name: "Apollo GraphQL", icon: "🚀", category: "Frameworks & Libraries" },
    { name: "GraphQL", icon: "📊", category: "Databases & Data" },
    { name: "Prisma", icon: "🔷", category: "Frameworks & Libraries" },
    { name: "Vercel", icon: "▲", category: "Hosting & Infrastructure" },
    { name: "Tailwind CSS", icon: "🎨", category: "Frameworks & Libraries" },
  ],

  allTechnologies: [
    // Programming Languages
    {
      name: "TypeScript / JavaScript",
      icon: "⚡",
      category: "Programming Languages",
    },
    { name: "Scala", icon: "🎯", category: "Programming Languages" },
    { name: "Java", icon: "☕", category: "Programming Languages" },
    { name: "C#", icon: "🔷", category: "Programming Languages" },
    { name: "Swift", icon: "🍎", category: "Programming Languages" },
    { name: "Delphi", icon: "🔧", category: "Programming Languages" },
    { name: "Rust", icon: "🦀", category: "Programming Languages" },

    // Frameworks & Libraries
    { name: "React.js", icon: "⚛️", category: "Frameworks & Libraries" },
    { name: "Next.js", icon: "▲", category: "Frameworks & Libraries" },
    { name: "Angular", icon: "🅰️", category: "Frameworks & Libraries" },
    { name: "React Native", icon: "📱", category: "Frameworks & Libraries" },
    { name: "Node.js", icon: "🟢", category: "Frameworks & Libraries" },
    { name: "Akka", icon: "🎭", category: "Frameworks & Libraries" },
    { name: "ZIO", icon: "⚡", category: "Frameworks & Libraries" },
    { name: "Unity", icon: "🎮", category: "Frameworks & Libraries" },
    { name: ".NET", icon: "🔷", category: "Frameworks & Libraries" },
    { name: "iOS", icon: "📱", category: "Frameworks & Libraries" },
    { name: "Android", icon: "🤖", category: "Frameworks & Libraries" },

    // Hosting & Infrastructure
    { name: "AWS", icon: "☁️", category: "Hosting & Infrastructure" },
    { name: "GCP", icon: "🌐", category: "Hosting & Infrastructure" },
    { name: "Vercel", icon: "▲", category: "Hosting & Infrastructure" },
    { name: "Digital Ocean", icon: "🌊", category: "Hosting & Infrastructure" },
    { name: "Firebase", icon: "🔥", category: "Hosting & Infrastructure" },
    { name: "Kubernetes", icon: "⚙️", category: "Hosting & Infrastructure" },
    { name: "Docker", icon: "🐳", category: "Hosting & Infrastructure" },
    { name: "Terraform", icon: "🏗️", category: "Hosting & Infrastructure" },
    { name: "Serverless", icon: "⚡", category: "Hosting & Infrastructure" },

    // Databases & Data
    { name: "PostgreSQL", icon: "🐘", category: "Databases & Data" },
    { name: "MongoDB", icon: "🍃", category: "Databases & Data" },
    { name: "DynamoDB", icon: "⚡", category: "Databases & Data" },
    { name: "Firestore", icon: "🔥", category: "Databases & Data" },
    { name: "GraphQL", icon: "📊", category: "Databases & Data" },
    { name: "Apache Kafka", icon: "📨", category: "Databases & Data" },
    { name: "Prometheus", icon: "📈", category: "Databases & Data" },
  ],

  experience: [
    {
      title: "Lead Engineer / Founding Engineer",
      company: "SUBBD",
      location: "Cyprus · Hybrid",
      period: "May 2024 - Present",
      description:
        "SUBBD is a next-generation AI- and blockchain-powered content creation platform designed to deepen engagement between creators and fans. It enables creators to monetize through subscriptions, pay-per-view content, premium messaging, livestreams, events and tokenized offerings, while offering fans immersive, gamified access to exclusive content and tools.",
      highlights: [
        "Created the entire platform from scratch, including infrastructure on GCP, a Next.js web app, and a GraphQL backend connected to PostgreSQL",
        "Built up an office in Warsaw and grew the engineering team from 0 to 12 developers",
        "Platform successfully went live in June, generating $10k revenue in the first 3 weeks with over 3,000 users",
      ],
      technologies: [
        "GCP",
        "TypeScript",
        "Next.js",
        "GraphQL",
        "Firebase",
        "PostgreSQL",
      ],
    },
    {
      title: "Technical Lead",
      company: "3RM.co",
      location: "San Francisco, CA · Remote",
      period: "Aug 2023 - May 2024",
      description:
        "3Sum, formerly known as 3RM, is an AI‑powered CRM and relationship intelligence tool designed for professionals using Telegram, Google Calendar, and other messaging platforms. It automates contact management, meeting summaries, batch messaging, and analytics—processing data client‑side to maintain complete privacy and security while saving users over 25 hours weekly.",
      highlights: [
        "Started as a Software Engineer and quickly became the Technical Lead for this web3 CRM for Telegram",
        "Served many web3 clients and was very hands-on",
        "Led the migration of the entire platform to AWS to enhance scalability and performance",
      ],
      technologies: [
        "Serverless",
        "PostgreSQL",
        "AWS",
        "TypeScript",
        "Node.js",
        "React.js",
      ],
    },
    {
      title: "Software Engineer",
      company: "MOIA",
      location: "Hamburg, Germany",
      period: "Dec 2020 - Jul 2023",
      description:
        "MOIA is a tech-driven mobility company (part of the Volkswagen Group) that operates in Hamburg and Hannover, offering fully electric ridepooling solutions designed to complement public transport and reduce urban emissions. Their mission is to make cities more livable through sustainable, flexible, and affordable shared mobility services, while advancing the use of autonomous electric vehicles integrated into smart city infrastructure.",
      highlights: [
        "Worked in the Fleet Optimization team as a Scala developer, planning and calculating routes for a large fleet of vehicles (e.g., 1,000+ vehicles)",
        "Solved the Dial-a-Ride problem (a derivative of the Traveling Salesman Problem)",
        "Worked with TypeScript to serve a GraphQL interface within a big microservice architecture",
        "By switching to Rust for critical calculations, we improved the amount of calculation loops by 30x",
      ],
      technologies: [
        "Scala",
        "Serverless",
        "AWS",
        "Kubernetes",
        "Prometheus",
        "Akka",
        "TypeScript",
        "GraphQL",
        "Rust",
      ],
    },
    {
      title: "Technical Integration Manager / Scala Developer",
      company: "RISK IDENT",
      location: "Hamburg, Germany",
      period: "Jan 2019 - Nov 2020",
      description:
        "RISK IDENT, founded in Hamburg in 2012 and fully backed by the Otto Group, is a leading German software company specializing in AI-driven fraud prevention. Their core solutions—FRIDA (fraud detection via machine learning) and DEVICE IDENT (device fingerprinting)—secure over €80 billion in customer revenue annually across e-commerce, telecommunications, finance, and mobility sectors.",
      highlights: [
        "Initially worked as a Technical Integration Manager, supporting customers with custom integrations",
        "Later transitioned to a Scala Developer role, building high-performance backend systems",
        "Designed and implemented a system capable of processing millions of transactions within minutes",
        "Utilized technologies like Apache Kafka and provided deep insights into fraud mechanisms",
      ],
      technologies: [
        "Scala",
        "Akka",
        "ZIO",
        "MongoDB",
        "Apache Kafka",
        "Kubernetes",
      ],
    },
    {
      title: "Lead Software Engineer / CTO",
      company: "Phlint",
      location: "San Francisco Bay Area",
      period: "Sep 2014 - Nov 2020",
      description:
        "Phlint is an agency specializing in various small to medium-sized projects, serving diverse clients including Google (for the Pixel/Nexus Retail Demo), AT&T, and Nespresso. The agency focuses on building scalable web and mobile applications, often involving IoT device integration and data processing for retail and other sectors.",
      highlights: [
        "Started as a Software Developer and progressed to CTO at Phlint",
        "Led full-stack development, product strategy, and the engineering team",
        "Built scalable web and mobile applications, often involving IoT device integration and data processing for retail and other sectors",
      ],
      technologies: [
        "Angular",
        "Firebase",
        "AWS",
        "GCP",
        "TypeScript",
        "Node.js",
        "React Native",
        "IoT",
        "Data Analytics",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Fashion Cloud",
      location: "Hamburg, Germany",
      period: "Jul 2018 - Dec 2018",
      description:
        "Fashion Cloud is a European all‑in‑one B2B platform—founded in Hamburg in 2015 with offices also in Amsterdam—that connects over 700 fashion brands with more than 25,000 retailers. Its intelligent platform simplifies wholesale operations by seamlessly integrating digital content exchange, product data management, order processing, digital showrooms and smart replenishment.",
      highlights: [
        "Contributed to Fashion Cloud, a platform serving retail material for major customers like Hugo Boss, Gant, and Zalando",
        "Primarily used Node.js, Angular, and AWS with TypeScript",
        "Worked on their React Native app, &apos;Clara,&apos; which enabled efficient stock reordering for retailers",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "AWS",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "React Native",
      ],
    },
    {
      title: "Developer",
      company: "Orgadata AG",
      location: "Hamburg, Germany",
      period: "Aug 2010 - Sep 2014",
      description:
        "Orgadata AG is a company building window calculation software for the construction industry, providing specialized tools for window manufacturers and construction professionals to streamline their design and calculation processes.",
      highlights: [
        "Gained hands-on experience in app development during apprenticeship",
        "Started by working on their main application using Delphi (Object Pascal)",
        "Later transitioned to building their Android and iOS mobile applications with Xamarin (C#)",
        "Built &apos;Smart-Measures&apos; and &apos;Smart-Calc&apos; apps designed to support construction workers with on-site measurements",
      ],
      technologies: [
        "C#",
        "Java",
        "Swift",
        "Delphi",
        "Xamarin",
        "Android",
        "iOS",
      ],
    },
  ],

  projects: [
    {
      title: "Google Pixel/Nexus Retail Demo",
      company: "Phlint",
      description:
        "As the leading engineer and a direct contractor for Google, I built the Google Pixel and Nexus Demo and Data Population service, deployed to over 5,000 retail stores worldwide. This initiative directly contributed to the sale of over 10 million devices.",
      technologies: ["Android", "Backend", "Retail"],
      highlights: [
        "Built demo and data population service for Google Pixel and Nexus devices",
        "Deployed to over 5,000 retail stores worldwide",
        "Directly contributed to the sale of over 10 million devices",
      ],
    },
    {
      title: "Litpic - Social Media App",
      company: "LitPic Inc.",
      description:
        "As the Lead Engineer, I built this React Native social media application, which achieved about 1,000 daily active users and generated over $5k MRR through its running payment system. The app included a custom camera SDK to apply visual effects to images and videos.",
      technologies: [
        "React Native",
        "iOS",
        "Social Media",
        "Mobile",
        "Camera SDK",
        "Payments",
      ],
      highlights: [
        "Built React Native social media application",
        "Achieved about 1,000 daily active users",
        "Generated over $5k MRR through payment system",
        "Included custom camera SDK for visual effects",
      ],
    },
    {
      title: "FenSens - Car Sensor & Backup Camera",
      company: "FenSens",
      description:
        "As the Lead Engineer, I built the native iOS and Android applications for this car sensor and backup parking system, which sold over 10,000 units on Amazon. I also developed the backend using a simple Parse dashboard and implemented livestreaming capabilities for backup cameras via Wi-Fi.",
      technologies: [
        "iOS Development",
        "Android Development",
        "Java",
        "Node.js",
        "Firebase",
        "IoT",
        "Livestreaming",
      ],
      highlights: [
        "Built native iOS and Android applications for car sensor and backup parking system",
        "Sold over 10,000 units on Amazon",
        "Developed backend using Parse dashboard",
        "Implemented livestreaming capabilities for backup cameras via Wi-Fi",
      ],
    },
    {
      title: "Graph Retail Analytics",
      company: "Phlint",
      description:
        "As Co-founder and CTO of this startup, I led the development of a comprehensive Retail Analytics platform. We tracked thousands of devices and provided in-store analytics, powered by Android devices and beacons for optimal results. Our work led to an interview with Sam Altman for YCombinator.",
      technologies: [
        "Node.js",
        "AWS",
        "Android",
        "Beacons",
        "IoT",
        "Data Analytics",
      ],
      highlights: [
        "Led development of comprehensive Retail Analytics platform",
        "Tracked thousands of devices and provided in-store analytics",
        "Powered by Android devices and beacons for optimal results",
        "Work led to an interview with Sam Altman for YCombinator",
      ],
    },
    {
      title: "60 Seconds Feedback",
      company: "Self-employed",
      description:
        "As Co-founder and CTO, I created this platform with a UX designer friend to gather user experience feedback by rating many websites. The platform was built using plain JavaScript (jQuery) for the frontend and a PHP backend.",
      technologies: ["JavaScript", "jQuery", "PHP", "Web App", "UX Feedback"],
      highlights: [
        "Created platform to gather user experience feedback by rating websites",
        "Built with plain JavaScript (jQuery) for the frontend",
        "PHP backend for data processing",
      ],
    },
  ],

  contact: [
    {
      type: "email" as const,
      label: "Email",
      value: "alex@softrocket.net",
      link: "mailto:alex@softrocket.net",
    },
    {
      type: "location" as const,
      label: "Location",
      value: "Hamburg, Germany",
    },
    {
      type: "github" as const,
      label: "GitHub",
      value: "github.com/alexweff",
      link: "https://github.com/alexweff",
    },
    {
      type: "linkedin" as const,
      label: "LinkedIn",
      value: "linkedin.com/in/alexander-van-der-werff",
      link: "https://linkedin.com/in/alexander-van-der-werff",
    },
    {
      type: "website" as const,
      label: "Website",
      value: "alex.softrocket.net",
      link: "https://alex.softrocket.net",
    },
  ],
};
