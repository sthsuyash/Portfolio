import {
  IInfoData,
  IQualificationData,
  ISkillsData,
  IServicesData,
  IProjectsData,
} from "@/utils/types";

export const InfoData: IInfoData[] = [
  {
    icon: "User2",
    text: "Suyash Shrestha",
  },
  {
    icon: "PhoneCall",
    text: "+977 9841309522",
  },
  {
    icon: "Mail",
    text: "shrestha.suyash33@gmail.com",
  },
  {
    icon: "Home",
    text: "Kathmandu, Nepal",
  },
];

export const QualificationData: IQualificationData[] = [
  {
    title: "Education",
    data: [
      {
        institute: "Tribhuvan University",
        qualification: "BSc.Computer Science and Information Technology",
        duration: "2021 - 2025",
      },
      {
        institute: "Trinity International College",
        qualification: "High School Science with Biology and Mathematics",
        duration: "2018 - 2020",
      },
    ],
  },
  {
    title: "Work Experience",
    data: [
      {
        company: "Yakana IT Solutions",
        title: "Junior Software Engineer",
        duration: "2023/07 - 2024/01",
      },
      // {
      //   company: "Freelance",
      //   title: "Software Developer",
      //   position: "Freelance",
      //   duration: "2023/01 - 2023/06",
      // },
      {
        company: "Kiko Solutions",
        title: "Software Engineer",
        duration: "2022/08 - 2023/06",
      },
      {
        company: "Kiko Solutions",
        title: "Software Engineer Intern",
        duration: "2022/05 - 2023/08",
      },
    ],
  },
];

export const SkillsData: ISkillsData[] = [
  {
    title: "Skills",
    data: [
      {
        img: "/about/skills/python.svg",
      },
      {
        img: "/about/skills/js.svg",
      },
      {
        img: "/about/skills/typescript.svg",
      },
      {
        img: "/about/skills/node-js.svg",
      },
      {
        img: "/about/skills/mysql.svg",
      },
      {
        img: "/about/skills/postgresql.svg",
      },
      {
        img: "/about/skills/mongodb.svg",
      },
      {
        img: "/about/skills/html-5.svg",
      },
      {
        img: "/about/skills/css.svg",
      },
      {
        img: "/about/skills/scss.svg",
      },

      {
        img: "/about/skills/java.svg",
      },
      {
        img: "/about/skills/spring.svg",
      },
      {
        img: "/about/skills/react.svg",
      },
      // {
      //   img: "/about/skills/django.svg",
      // },
      {
        img: "/about/skills/nextjs.svg",
      },
      {
        img: "/about/skills/aws.svg",
      },
      {
        img: "/about/skills/firebase.svg",
      },
      // {
      //   img: "/about/skills/go.svg",
      // },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        img: "/about/tools/vscode.svg",
      },
      {
        img: "/about/tools/git.svg",
      },
      {
        img: "/about/tools/github.svg",
      },
      {
        img: "/about/tools/postman.svg",
      },
      {
        img: "/about/tools/jira.svg",
      },
      {
        img: "/about/tools/docker.svg",
      },
      {
        img: "/about/tools/excel.svg",
      },
      {
        img: "/about/tools/jetbrains.svg",
      },
      {
        img: "/about/tools/linux.svg",
      },
    ],
  },
];

export const ServicesData: IServicesData[] = [
  {
    icon: "GanttChartSquare",
    title: "Web Development",
    description:
      "Transform your online presence with my personalized web development services. As an individual with a year of expertise, I specialize in creating unique websites that reflect your identity. Whether you're starting something new or giving your current space a makeover, let's collaborate to make your digital presence shine. Your story, beautifully crafted online – that's my commitment. Let's build something special together",
  },
  {
    icon: "Database",
    title: "Data Science",
    description:
      "Elevate your data game with my personalized data science services. I specialize in turning raw data into actionable insights. Whether you're delving into a new project or seeking to extract value from your existing data, I'm here to guide you. From predictive analytics to machine learning, let's harness the power of data to fuel your success. Let's embark on a data-driven journey together!",
  },
  {
    icon: "Smartphone",
    title: "Mobile Development",
    description:
      "Celebrate your digital journey with my tailored mobile development services. I specialize in creating user-friendly and innovative mobile applications. Whether you're launching a new app or refining your current one, I'm here to bring your ideas to life. From sleek design to smooth functionality, let's build mobile solutions that resonate with your audience. Let's make your mobile presence remarkable together",
  },
];

export const ProjectsData: IProjectsData[] = [
  {
    title: "Football Analysis System",
    description:
      "An advanced AI/ML system leveraging OpenCV and YOLO to provide real-time football match analysis and actionable insights.",
    img: "/work/football-analysis.png",
    github: "https://github.com/sthsuyash/AI-Football-Analysis-System",
    tags: ["OpenCV", "YOLO", "Python", "Machine Learning"]
  },
  {
    title: "RAG System",
    description:
      "An LLM project that improves data access and enhances information retrieval through intelligent interaction and context-aware responses.",
    img: "/work/chatpdf.webp",
    github: "https://github.com/sthsuyash/chat-pdf",
    tags: ["Python", "Langchain", "LLM", "RAG", "Chatbot"],
  },
  {
    title: "GharBikri",
    description:
      "GharBikri is a real estate website, where users can buy, sell, and rent properties and makes the process of finding a property easy and hassle-free.",
    img: "/work/gharbikri.png",
    link: "https://gharbikri.vercel.app",
    github: "https://github.com/sthsuyash/GharBikri",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "Nepali News with Sentiment Analysis",
    description:
      "A news web portal that allows users to read articles with sentiment analysis for positivity with recommendation system.",
    img: "/work/news.jpg",
    link: "https://nepali-news-portal.vercel.app",
    github: "https://github.com/sthsuyash/News-Portal",
    tags: ["Python", "React", "Machine Learning", "NLP"],
  },
  {
    title: "Orange Safe Pass",
    description:
      "Orange Safe Pass is a web application that helps to manage the entry and exit of people in an organization.",
    img: "/work/orangepass.png",
    link: "https://orangesafepass.com/",
    tags: ["React", "Node.js", "Firebase"],
  },
  {
    title: "ConnectCircle",
    description:
      "ConnectCircle is a social media website, where users can connect with each other and share their thoughts and ideas.",
    img: "/work/connectcircle.png",
    github: "",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  // {
  //   title: "Chitchatify",
  //   description:
  //     "Chitchatify is a messaging application, where users can chat with each other and share their thoughts and ideas.",
  //   img: "/work/chitchatify.png",
  //   github: "https://github.com",
  //   tags: ["React", "Node.js", "Express.js", "PostgreSQL"],
  // },
];
