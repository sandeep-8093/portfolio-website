
export const projects = [
  {
    id: 1,
    title: "StackUp — Developer Social Network",
    img: "https://i.ibb.co/2sfvNt2/screencapture-stackup-netlify-app-2022-05-06-14-17-02.png",
    link: "https://stack-up-client.netlify.app/",
    github: "https://github.com/sandeep8093",
    description:
      "A developer-focused social platform with user auth, post creation, upvoting, profile search, and real-time feed. Built with Angular, Node.js, Express, and MongoDB.",
    tech: ["Angular", "Node.js", "Express", "MongoDB", "JWT"],
    type: "fullstack",
  },
  {
    id: 2,
    title: "Pastebin Clone — Code Snippet Sharing",
    img: "https://i.ibb.co/Wf5BLPD/screencapture-pastebin-client-netlify-app-2023-12-10-13-35-48.png",
    link: "https://pastebin-client.netlify.app/",
    github: "https://github.com/sandeep8093",
    description:
      "A code snippet sharing tool with syntax highlighting, expiry settings, and public/private access control. Built with React and a Node.js/Express REST API.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    type: "fullstack",
  },
  {
    id: 3,
    title: "Dress-Up — E-Commerce Platform",
    img: "https://i.ibb.co/vm9bzQK/screencapture-cheerful-kleicha-df2c43-netlify-app-2022-07-31-23-26-27.png",
    link: "https://dress-up-main.netlify.app/",
    github: "https://github.com/sandeep8093",
    description:
      "A full-featured e-commerce app with product listing, cart, Stripe payments, and user authentication. Migrated backend from Express to NestJS.",
    tech: ["React", "NestJS", "PostgreSQL", "Stripe", "AWS S3"],
    type: "fullstack",
  },
  {
    id: 4,
    title: "Learning Platform — EdTech SaaS",
    img: "https://i.ibb.co/Gtx74qc/screencapture-learning-client-netlify-app-2023-12-10-13-32-35.png",
    link: "https://learning-client.netlify.app/",
    github: "https://github.com/sandeep8093",
    description:
      "An online learning platform with course management, video lessons, enrollment tracking, and progress dashboards. REST API built with Express and PostgreSQL.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    type: "fullstack",
  },
  {
    id: 5,
    title: "Fitness Service — Health & Wellness App",
    img: "https://i.ibb.co/tsrpDYQ/gym.png",
    link: "https://fitness-service-static.onrender.com/",
    github: "https://github.com/sandeep8093",
    description:
      "A fitness tracking app featuring workout plans, membership tiers, and schedule booking. Server-side rendered with Node.js and MongoDB on Render.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    type: "backend",
  },
  {
    id: 6,
    title: "Basic Banking Service — Fintech App",
    img: "https://i.ibb.co/G2D2TxQ/bank.png",
    link: "https://basic-banking-service.onrender.com/",
    github: "https://github.com/sandeep8093",
    description:
      "A banking simulation app with fund transfer, transaction history, and account management. Demonstrates PostgreSQL relational schema design and MVC architecture.",
    tech: ["Node.js", "Express", "PostgreSQL", "EJS"],
    type: "backend",
  },
  {
    id: 7,
    title: "Basic Catering — Static Website",
    img: "https://i.ibb.co/h1spb4r/cater.png",
    link: "https://sandeep8093.github.io/Basic-Catering.github.io/",
    github: "https://github.com/sandeep8093/Basic-Catering.github.io",
    description:
      "A responsive catering business website with menu showcase, event booking info, and contact form. Built with vanilla HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "frontend",
  },
];

export const experience = [
  {
    id: 1,
    company: "Qwikskills Private Limited",
    dates: "July 2023 – Present",
    duties: [
      "Collaborated with cross-functional teams to develop and maintain REST APIs for a SaaS-based accounting and inventory management product.",
      "Engineered backend services using Node.js, Express.js, and PostgreSQL to power core Fintech features.",
      "Designed and optimized complex SQL queries and schema for financial data reporting and reconciliation.",
      "Integrated third-party payment gateways and financial data providers via secure API contracts.",
    ],
    title: "Backend Engineer",
    website: "https://qwikskills.com/",
  },
  {
    id: 2,
    company: "Anicca Data Science Pvt. Ltd.",
    dates: "January 2023 – June 2023",
    duties: [
      "Built user authentication APIs using Flask with JWT-based security for a data analytics SaaS platform.",
      "Implemented a scheduler service for automated subscription email delivery at configurable intervals.",
      "Contributed to migrating a monolithic architecture to microservices by deploying independent Flask instances.",
      "Conducted unit testing and debugging to improve application stability and performance.",
    ],
    title: "Software Development Intern",
    website: "https://www.aniccadata.com/",
  },
  {
    id: 3,
    company: "Bookmatic Pvt. Ltd.",
    dates: "June 2022 – October 2022",
    duties: [
      "Co-developed REST APIs for a SaaS-based accounting and inventory management platform.",
      "Gained hands-on experience with PostgreSQL for Fintech data modelling and relational schema design.",
      "Authored comprehensive backend API documentation to support frontend integration and QA workflows.",
    ],
    title: "Backend Development Intern",
    website: "https://onlinekhata.co.in/",
  },
  {
    id: 4,
    company: "Banao Technologies (Across The Globe)",
    dates: "September 2021 – March 2022",
    duties: [
      "Designed and developed a social media platform allowing users with shared interests to connect and post.",
      "Built a referential relational database schema and implemented JWT-based authentication.",
      "Leveraged AWS S3 for media storage and applied MVC architecture for clean code separation.",
    ],
    title: "Node.js Development Intern",
    website: "https://www.banao.tech/",
  },
];

export const accomplishments = [
  {
    id: 1,
    title: "B.Tech — Electronics & Telecommunication Engineering",
    org: "IIIT Bhubaneswar",
    date: "2019 – 2023",
    detail: "CGPA: 7.73",
    link: "https://www.iiit-bh.ac.in/",
    icon: "🎓",
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    date: "2023",
    detail: "Hands-on with S3, EC2, Lambda, and IAM across real projects.",
    link: "https://aws.amazon.com/certification/",
    icon: "☁️",
  },
  {
    id: 3,
    title: "Backend Architecture — Microservices Migration",
    org: "Anicca Data Science",
    date: "2023",
    detail:
      "Led the decomposition of a Flask monolith into independent microservices, improving scalability.",
    link: "https://www.aniccadata.com/",
    icon: "🏗️",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    org: "GitHub",
    date: "Ongoing",
    detail:
      "Actively maintaining personal projects and contributing to community repositories on GitHub.",
    link: "https://github.com/sandeep8093",
    icon: "🔓",
  },
];
