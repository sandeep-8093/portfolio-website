
export const projects = [
  {
    id: 1,
    title: "Stack-Up — MEAN Stack Q&A Platform",
    img: "https://i.ibb.co/2sfvNt2/screencapture-stackup-netlify-app-2022-05-06-14-17-02.png",
    link: "https://stack-up-client.netlify.app/",
    github: "https://github.com/sandeep8093",
    description:
      "A full-stack Q&A platform using the MEAN stack (MongoDB, Express, Angular, Node.js), featuring user authentication, RESTful APIs, content interactions, and profile-based networking capabilities.",
    tech: ["Angular", "Node.js", "Express", "MongoDB", "JWT"],
    type: "fullstack",
  },
  {
    id: 2,
    title: "Dress-Up — Cross-Platform eCommerce",
    img: "https://i.ibb.co/vm9bzQK/screencapture-cheerful-kleicha-df2c43-netlify-app-2022-07-31-23-26-27.png",
    link: "https://dress-up-main.netlify.app/",
    github: "https://github.com/sandeep8093",
    description:
      "A cross-platform eCommerce app for fashion products supporting multiple categories, seamless UX, RESTful APIs, an Admin Panel for CRUD operations, and Stripe for secure payment processing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    type: "fullstack",
  },
  {
    id: 3,
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
];

export const experience = [
  {
    id: 1,
    company: "GE Healthcare",
    location: "Bangalore, India",
    dates: "April 2024 – Present",
    duties: [
      "Engineered end-to-end MRI Spectroscopy graphical components within GRx, seamlessly linking front-end geometry models with back-end data interpretation layers using Angular, Node.js, and TypeScript.",
      "Built a GenAI chatbot (LangChain, RAG, FAISS) that vectorized SPR data, enabling management to instantly query defect data and eliminating manual defect reviews.",
      "Maintained and optimized a PaaS-based microservices architecture (Node.js, Python, AWS), leveraging RabbitMQ for seamless, fault-tolerant processing of DICOM medical data.",
      "Deployed microservices on Kubernetes using Helm, ensuring seamless integration and stability alongside legacy dependencies.",
      "Refactored legacy Java and Python systems into modular components, driving significant improvements in maintainability and stability.",
    ],
    title: "Software Engineer Specialist",
    website: "https://www.gehealthcare.com/",
  },
  {
    id: 2,
    company: "QwikSkills Private Limited",
    location: "Bangalore, India",
    dates: "July 2023 – February 2024",
    duties: [
      "Implemented Elasticsearch-powered search in Node.js backend services, improving query performance, indexing efficiency, and search relevance across the platform.",
      "Built and optimized backend APIs using Node.js and Sequelize ORM, integrating Azure Blob Storage for scalable file storage, ensuring efficient SQL queries and data consistency.",
      "Streamlined email processes through integration of Amazon SES, reducing email delivery time by 50% and significantly boosting customer engagement.",
    ],
    title: "Backend Developer",
    website: "https://qwikskills.com/",
  },
  {
    id: 3,
    company: "Anicca Data Science Solutions",
    location: "Bangalore, India",
    dates: "January 2023 – June 2023",
    duties: [
      "Developed backend APIs for a traffic analytics system using Python (Flask) and Azure SQL, enabling efficient data processing, filtering, and real-time insights from large-scale traffic datasets.",
      "Developed User Authentication APIs with JWT, bolstering the protection of sensitive user data.",
    ],
    title: "Software Developer Intern",
    website: "https://www.aniccadata.com/",
  },
  {
    id: 4,
    company: "Bookmatic Private Limited",
    location: "Remote",
    dates: "July 2022 – November 2022",
    duties: [
      "Engineered RESTful APIs for OnlineKhata, a SaaS-based accounting and inventory management solution.",
      "Documented backend API specifications and optimized database queries and performance for Python and PostgreSQL services, ensuring low-latency transaction processing and efficient data retrieval.",
    ],
    title: "Backend Development Intern",
    website: "https://onlinekhata.co.in/",
  },
  {
    id: 5,
    company: "Banao Technologies (ATG)",
    location: "Remote",
    dates: "September 2021 – March 2022",
    duties: [
      "Contributed to the development of HobbyCue, a social media platform using Node.js and MongoDB, enabling interest-based user connections and interactions.",
      "Developed a relational database architecture and utilized Amazon S3 for efficient data storage, achieving a 40% improvement in data retrieval speed.",
    ],
    title: "Node.js Development Intern",
    website: "https://www.banao.tech/",
  },
];
