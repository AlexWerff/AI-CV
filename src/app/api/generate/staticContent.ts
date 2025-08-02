import { GeneratedPageData } from "@/lib/openai";

// Static responses for predefined searches
export const STATIC_FULL_CV: GeneratedPageData = {
  title: "Alexander van der Werff - Full CV",
  description:
    "Comprehensive CV of Alexander van der Werff, Technical Lead & Founding Engineer. Includes professional summary, skills, experience, projects, and contact information.",
  components: [
    {
      type: "TextBox",
      props: {
        title: "Welcome",
        content:
          "I'm Alexander van der Werff, a seasoned Technical Lead and Founding Engineer based in Hamburg, Germany. I specialize in building robust, scalable software and leading teams to deliver high-impact products. My experience spans full-stack development, cloud infrastructure, mobile apps, and technical leadership across startups and established companies.",
        variant: "highlighted",
      },
    },
    {
      type: "About",
      props: {
        title: "About Me",
        content:
          "I'm a seasoned Technical Lead and Founding Engineer with a knack for turning ambitious ideas into robust, scalable software. From building platforms from scratch (like SUBBD, hitting $10k revenue in 3 weeks) to leading critical migrations (3RM.co's AWS transition) and optimizing complex systems (MOIA's 30x speed boost with Rust), I thrive on technical challenges. My journey spans full-stack development, mobile apps (iOS/Android for FenSens, Litpic, Orgadata), backend systems, and cloud infrastructure across diverse industries, including fraud prevention (RISK IDENT) and retail analytics (Phlint, serving Google, AT&T, Nespresso). I'm passionate about crafting high-quality solutions and constantly exploring new tech. And yes, I'm always up for a good hackathon – especially if there's beer 🍺 and pizza 🍕 involved!",
      },
    },
    {
      type: "TechnologyStack",
      props: {
        title: "Current Technologies",
        technologies: [
          { name: "TypeScript", icon: "⚡", category: "Programming Languages" },
          { name: "Next.js", icon: "▲", category: "Frameworks & Libraries" },
          { name: "React.js", icon: "⚛️", category: "Frameworks & Libraries" },
          { name: "Node.js", icon: "🟢", category: "Frameworks & Libraries" },
          { name: "PostgreSQL", icon: "🐘", category: "Databases & Data" },
          { name: "AWS", icon: "☁️", category: "Hosting & Infrastructure" },
          { name: "GCP", icon: "🌐", category: "Hosting & Infrastructure" },
          {
            name: "Apollo GraphQL",
            icon: "🚀",
            category: "Frameworks & Libraries",
          },
          { name: "GraphQL", icon: "📊", category: "Databases & Data" },
          { name: "Prisma", icon: "🔷", category: "Frameworks & Libraries" },
          { name: "Vercel", icon: "▲", category: "Hosting & Infrastructure" },
          {
            name: "Tailwind CSS",
            icon: "🎨",
            category: "Frameworks & Libraries",
          },
        ],
        layout: "grid",
      },
    },
    {
      type: "TechnologyStack",
      props: {
        title: "All Technologies",
        technologies: [
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
          {
            name: "React Native",
            icon: "📱",
            category: "Frameworks & Libraries",
          },
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
          {
            name: "Digital Ocean",
            icon: "🌊",
            category: "Hosting & Infrastructure",
          },
          {
            name: "Firebase",
            icon: "🔥",
            category: "Hosting & Infrastructure",
          },
          {
            name: "Kubernetes",
            icon: "⚙️",
            category: "Hosting & Infrastructure",
          },
          { name: "Docker", icon: "🐳", category: "Hosting & Infrastructure" },
          {
            name: "Terraform",
            icon: "🏗️",
            category: "Hosting & Infrastructure",
          },
          {
            name: "Serverless",
            icon: "⚡",
            category: "Hosting & Infrastructure",
          },
          // Databases & Data
          { name: "PostgreSQL", icon: "🐘", category: "Databases & Data" },
          { name: "MongoDB", icon: "🍃", category: "Databases & Data" },
          { name: "DynamoDB", icon: "⚡", category: "Databases & Data" },
          { name: "Firestore", icon: "🔥", category: "Databases & Data" },
          { name: "GraphQL", icon: "📊", category: "Databases & Data" },
          { name: "Apache Kafka", icon: "📨", category: "Databases & Data" },
          { name: "Prometheus", icon: "📈", category: "Databases & Data" },
        ],
        layout: "categories",
      },
    },
    {
      type: "Experience",
      props: {
        title: "Professional Experience",
        experiences: [
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
              "Worked on their React Native app, 'Clara,' which enabled efficient stock reordering for retailers",
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
              "Built 'Smart-Measures' and 'Smart-Calc' apps designed to support construction workers with on-site measurements",
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
        layout: "timeline",
      },
    },
    {
      type: "Projects",
      props: {
        title: "Selected Projects",
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
            technologies: [
              "JavaScript",
              "jQuery",
              "PHP",
              "Web App",
              "UX Feedback",
            ],
            highlights: [
              "Created platform to gather user experience feedback by rating websites",
              "Built with plain JavaScript (jQuery) for the frontend",
              "PHP backend for data processing",
            ],
          },
        ],
        layout: "grid",
      },
    },
    {
      type: "Contact",
      props: {
        title: "Contact",
        contactItems: [
          {
            type: "email",
            label: "Email",
            value: "alex@softrocket.net",
            link: "mailto:alex@softrocket.net",
          },
          {
            type: "location",
            label: "Location",
            value: "Hamburg, Germany",
          },
          {
            type: "github",
            label: "GitHub",
            value: "github.com/alexwerff",
            link: "https://github.com/alexwerff",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "linkedin.com/in/alexander-van-der-werff",
            link: "https://linkedin.com/in/alexander-van-der-werff",
          },
          {
            type: "website",
            label: "Website",
            value: "alex.softrocket.net",
            link: "https://alex.softrocket.net",
          },
        ],
        layout: "grid",
      },
    },
  ],
  layout: "single-column",
};

export const STATIC_SCALA_EXPERIENCE: GeneratedPageData = {
  title: "Scala Experience - Alexander van der Werff",
  description: "Specialized Scala development experience and projects",
  components: [
    {
      type: "Hero",
      props: {
        name: "Alexander van der Werff",
        title: "Scala Developer & Technical Lead",
        location: "Hamburg, Germany",
      },
    },
    {
      type: "About",
      props: {
        title: "Scala Expertise",
        content:
          "I'm a passionate Scala developer with extensive experience in building high-performance, scalable applications. My expertise includes Akka for concurrent programming, functional programming paradigms, and designing robust microservices architectures.\n\nI've led teams in developing complex Scala applications that handle millions of requests daily, with a focus on performance optimization and maintainable code.",
      },
    },
    {
      type: "TechnologyStack",
      props: {
        title: "Scala & Related Technologies",
        technologies: [
          { name: "Scala", icon: "⚡", category: "Language" },
          { name: "Akka", icon: "🎭", category: "Framework" },
          { name: "Play Framework", icon: "🎮", category: "Framework" },
          { name: "Slick", icon: "💾", category: "Database" },
          { name: "Cats", icon: "🐱", category: "Libraries" },
          { name: "ZIO", icon: "⚡", category: "Libraries" },
          { name: "SBT", icon: "🔧", category: "Build Tool" },
          { name: "ScalaTest", icon: "🧪", category: "Testing" },
        ],
        layout: "categories",
      },
    },
    {
      type: "Experience",
      props: {
        title: "Scala Development Experience",
        experiences: [
          {
            title: "Technical Lead - Scala",
            company: "Current Company",
            location: "Hamburg, Germany",
            period: "2022 - Present",
            description:
              "Leading Scala development initiatives and mentoring teams in functional programming best practices.",
            technologies: ["Scala", "Akka", "Cats", "Slick", "PostgreSQL"],
            highlights: [
              "Architected microservices using Akka Cluster",
              "Implemented functional programming patterns across the team",
              "Reduced system latency by 50% through Akka optimization",
            ],
          },
          {
            title: "Senior Scala Developer",
            company: "Previous Company",
            location: "Hamburg, Germany",
            period: "2020 - 2022",
            description:
              "Developed high-performance Scala applications with focus on concurrent programming.",
            technologies: ["Scala", "Akka", "Play Framework", "SBT"],
            highlights: [
              "Built RESTful APIs handling 1M+ requests daily",
              "Implemented actor-based concurrency patterns",
              "Achieved 99.9% uptime for critical services",
            ],
          },
        ],
        layout: "timeline",
      },
    },
    {
      type: "Projects",
      props: {
        title: "Scala Projects",
        projects: [
          {
            title: "Akka Microservices Platform",
            description:
              "Designed and implemented a scalable microservices platform using Akka Cluster and Akka Persistence.",
            technologies: ["Scala", "Akka", "Docker", "Kubernetes"],
            highlights: [
              "Handles 10M+ requests per day",
              "Automatic failover and recovery",
              "Event sourcing with Akka Persistence",
            ],
          },
          {
            title: "Functional Data Pipeline",
            description:
              "Built a data processing pipeline using functional programming principles and Cats library.",
            technologies: ["Scala", "Cats", "Slick", "PostgreSQL"],
            highlights: [
              "Pure functional data transformations",
              "Type-safe database operations",
              "Comprehensive error handling",
            ],
          },
        ],
        layout: "grid",
      },
    },
  ],
  layout: "single-column",
};

export const STATIC_TYPESCRIPT_EXPERIENCE: GeneratedPageData = {
  title: "TypeScript Experience - Alexander van der Werff",
  description: "Full-stack TypeScript development experience and projects",
  components: [
    {
      type: "Hero",
      props: {
        name: "Alexander van der Werff",
        title: "Full-Stack TypeScript Developer",
        location: "Hamburg, Germany",
      },
    },
    {
      type: "About",
      props: {
        title: "TypeScript & Full-Stack Expertise",
        content:
          "I'm a full-stack developer specializing in TypeScript, React, and Node.js. I build modern, scalable web applications with a focus on type safety, performance, and user experience.\n\nMy expertise spans from frontend development with React and TypeScript to backend development with Node.js, including database design and API development.",
      },
    },
    {
      type: "TechnologyStack",
      props: {
        title: "TypeScript & Full-Stack Technologies",
        technologies: [
          { name: "TypeScript", icon: "📘", category: "Language" },
          { name: "React", icon: "⚛️", category: "Frontend" },
          { name: "Node.js", icon: "🟢", category: "Backend" },
          { name: "Next.js", icon: "▲", category: "Framework" },
          { name: "Express.js", icon: "🚂", category: "Backend" },
          { name: "PostgreSQL", icon: "🐘", category: "Database" },
          { name: "GraphQL", icon: "🔷", category: "API" },
          { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
          { name: "Docker", icon: "🐳", category: "DevOps" },
          { name: "AWS", icon: "☁️", category: "Cloud" },
        ],
        layout: "categories",
      },
    },
    {
      type: "Experience",
      props: {
        title: "Full-Stack Development Experience",
        experiences: [
          {
            title: "Full-Stack Developer",
            company: "Current Company",
            location: "Hamburg, Germany",
            period: "2022 - Present",
            description:
              "Developing end-to-end web applications using TypeScript, React, and Node.js.",
            technologies: [
              "TypeScript",
              "React",
              "Node.js",
              "PostgreSQL",
              "AWS",
            ],
            highlights: [
              "Built responsive web applications with React and TypeScript",
              "Developed RESTful APIs with Node.js and Express",
              "Implemented real-time features with WebSockets",
            ],
          },
          {
            title: "Frontend Developer",
            company: "Previous Company",
            location: "Hamburg, Germany",
            period: "2020 - 2022",
            description:
              "Specialized in React and TypeScript development for modern web applications.",
            technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
            highlights: [
              "Developed component libraries with TypeScript",
              "Optimized application performance and bundle size",
              "Implemented advanced state management patterns",
            ],
          },
        ],
        layout: "timeline",
      },
    },
    {
      type: "Projects",
      props: {
        title: "TypeScript & Full-Stack Projects",
        projects: [
          {
            title: "React Admin Dashboard",
            description:
              "Built a comprehensive admin dashboard with real-time data visualization and advanced filtering.",
            technologies: ["TypeScript", "React", "D3.js", "GraphQL"],
            highlights: [
              "Real-time data updates with WebSockets",
              "Advanced filtering and search capabilities",
              "Responsive design for all devices",
            ],
          },
          {
            title: "Node.js API Platform",
            description:
              "Developed a scalable REST API platform with authentication and rate limiting.",
            technologies: ["TypeScript", "Node.js", "Express", "PostgreSQL"],
            highlights: [
              "JWT-based authentication system",
              "Rate limiting and request validation",
              "Comprehensive API documentation",
            ],
          },
        ],
        layout: "grid",
      },
    },
  ],
  layout: "single-column",
};
