import { GeneratedPageData } from "@/lib/openai";

// Static responses for predefined searches
export const STATIC_FULL_CV: GeneratedPageData = {
  title: "Alexander van der Werff - CV",
  description:
    "Full CV showcasing skills, experiences, projects, and contact information",
  components: [
    {
      type: "TextBox",
      props: {
        title: "Welcome to My Professional Profile",
        content:
          "I'm Alexander van der Werff, a Technical Lead and Founding Engineer based in Hamburg, Germany. With over 8 years of experience in software development, I specialize in building scalable, high-performance applications using modern technologies and best practices.",
        variant: "highlighted",
      },
    },
    {
      type: "About",
      props: {
        title: "About Me",
        content:
          "I'm a passionate software engineer with expertise in both backend and frontend development. My journey in tech has led me through various roles, from individual contributor to technical leadership positions. I believe in writing clean, maintainable code and fostering collaborative development environments.\n\nMy technical background spans multiple domains including microservices architecture, cloud-native applications, and modern web development. I enjoy mentoring junior developers and contributing to open-source projects.",
      },
    },
    {
      type: "TechnologyStack",
      props: {
        title: "Technical Skills",
        technologies: [
          { name: "Scala", icon: "⚡", category: "Backend Languages" },
          { name: "TypeScript", icon: "📘", category: "Frontend Languages" },
          { name: "JavaScript", icon: "🟨", category: "Frontend Languages" },
          { name: "Java", icon: "☕", category: "Backend Languages" },
          { name: "Python", icon: "🐍", category: "Backend Languages" },
          { name: "React", icon: "⚛️", category: "Frontend Frameworks" },
          { name: "Node.js", icon: "🟢", category: "Backend Frameworks" },
          { name: "Akka", icon: "🎭", category: "Backend Frameworks" },
          { name: "Spring Boot", icon: "🍃", category: "Backend Frameworks" },
          { name: "PostgreSQL", icon: "🐘", category: "Databases" },
          { name: "MongoDB", icon: "🍃", category: "Databases" },
          { name: "Redis", icon: "🔴", category: "Databases" },
          { name: "Docker", icon: "🐳", category: "DevOps" },
          { name: "Kubernetes", icon: "⚓", category: "DevOps" },
          { name: "AWS", icon: "☁️", category: "Cloud Platforms" },
          { name: "GraphQL", icon: "🔷", category: "APIs" },
          { name: "REST APIs", icon: "🌐", category: "APIs" },
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
            title: "Technical Lead",
            company: "Current Company",
            location: "Hamburg, Germany",
            period: "2022 - Present",
            description:
              "Leading technical initiatives and mentoring development teams while architecting scalable solutions.",
            technologies: [
              "Scala",
              "Akka",
              "TypeScript",
              "React",
              "AWS",
              "Docker",
            ],
            highlights: [
              "Led migration from monolithic to microservices architecture",
              "Mentored 5+ junior developers and improved team productivity",
              "Improved system performance by 40% through optimization",
              "Implemented CI/CD pipelines reducing deployment time by 60%",
            ],
          },
          {
            title: "Senior Software Engineer",
            company: "Previous Company",
            location: "Hamburg, Germany",
            period: "2020 - 2022",
            description:
              "Developed and maintained high-performance backend services and APIs.",
            technologies: [
              "Scala",
              "Akka",
              "PostgreSQL",
              "Docker",
              "Kubernetes",
            ],
            highlights: [
              "Built RESTful APIs serving 1M+ requests daily",
              "Implemented comprehensive automated testing pipeline",
              "Reduced deployment time by 60% through automation",
              "Achieved 99.9% uptime for critical services",
            ],
          },
          {
            title: "Full-Stack Developer",
            company: "Startup Company",
            location: "Hamburg, Germany",
            period: "2018 - 2020",
            description:
              "Developed end-to-end web applications and contributed to product development.",
            technologies: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
            highlights: [
              "Built responsive web applications with modern React",
              "Developed RESTful APIs with Node.js and Express",
              "Implemented real-time features using WebSockets",
              "Contributed to product roadmap and feature planning",
            ],
          },
        ],
        layout: "timeline",
      },
    },
    {
      type: "Projects",
      props: {
        title: "Key Projects",
        projects: [
          {
            title: "Microservices Platform",
            company: "Current Company",
            description:
              "Designed and implemented a scalable microservices platform using Scala and Akka.",
            technologies: [
              "Scala",
              "Akka",
              "Docker",
              "Kubernetes",
              "PostgreSQL",
            ],
            highlights: [
              "Handles 10M+ requests per day with 99.9% uptime",
              "Automatic failover and recovery mechanisms",
              "Reduced infrastructure costs by 30%",
              "Event sourcing with Akka Persistence",
            ],
          },
          {
            title: "React Admin Dashboard",
            description:
              "Built a comprehensive admin dashboard with real-time data visualization and advanced filtering.",
            technologies: [
              "React",
              "TypeScript",
              "GraphQL",
              "D3.js",
              "Tailwind CSS",
            ],
            highlights: [
              "Real-time data updates with WebSockets",
              "Advanced filtering and search capabilities",
              "Responsive design for all devices",
              "Interactive data visualizations",
            ],
          },
          {
            title: "E-commerce Platform",
            description:
              "Developed a full-stack e-commerce solution with payment integration and inventory management.",
            technologies: [
              "Node.js",
              "React",
              "PostgreSQL",
              "Stripe API",
              "Redis",
            ],
            highlights: [
              "Secure payment processing with Stripe",
              "Real-time inventory management",
              "Order tracking and notification system",
              "Mobile-responsive design",
            ],
          },
        ],
        layout: "grid",
      },
    },
    {
      type: "Contact",
      props: {
        title: "Get In Touch",
        contactItems: [
          {
            type: "email",
            label: "Email",
            value: "alex@softrocket.net",
            icon: "📧",
            link: "mailto:alex@softrocket.net",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "Alexander van der Werff",
            icon: "💼",
            link: "https://linkedin.com/in/alexander-van-der-werff",
          },
          {
            type: "github",
            label: "GitHub",
            value: "alexweff",
            icon: "🐙",
            link: "https://github.com/alexweff",
          },
          {
            type: "location",
            label: "Location",
            value: "Hamburg, Germany",
            icon: "📍",
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
