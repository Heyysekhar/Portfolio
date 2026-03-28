export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "AI/ML Engineer", icon: "/assets/icons/ai.svg" },
  { title: "Data Scientist", icon: "/assets/icons/data.svg" },
  { title: "MERN Stack Developer", icon: "/assets/icons/web.svg" },
  { title: "LLM App Builder", icon: "/assets/icons/llm.svg" },
];

const technologies = {
  Languages: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  Frameworks: [
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  ],
  "AI & ML": [
    { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  ],
  Databases: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PineconeDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  Tools: [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  ],
  Platforms: [
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
    { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
  ],
};

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "OCAC — Odisha Computer Application Center",
    icon: "/assets/icons/ocac.png",
    iconBg: "#383E56",
    date: "June 2025 – Present",
    points: [
      "Led development on two key projects using React, Node.js, MongoDB, and Express, providing full-stack solutions.",
      "Designed and implemented user interfaces with React and Material-UI, focusing on intuitive navigation, product browsing, and mobile responsiveness.",
      "Developed RESTful APIs with Node.js and Express to handle product listings, cart management, order processing, and payment workflows.",
      "Built secure authentication and authorization using JWT tokens and bcrypt, enabling user registration, login, and role-based access (admin/customer).",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "EDVEDHA",
    icon: "/assets/icons/edvedha.png",
    iconBg: "#E6DEDD",
    date: "January 2025 – March 2025",
    points: [
      "Worked on real-world data science projects involving data analysis, visualization, and ML model building.",
      "Applied Python-based workflows for data cleaning, feature engineering, and exploratory data analysis.",
      "Gained practical experience in model evaluation, optimization, and documentation.",
    ],
  },
];

const projects = [
  {
    name: "Medical Chatbot",
    description:
      "AI-powered Medical Chatbot using LLMs with LangChain and Pinecone, implementing RAG for context-aware responses. Deployed on AWS (EC2/S3) for production-ready scalability.",
    tags: [
      { name: "langchain", color: "blue-text-gradient" },
      { name: "pinecone", color: "green-text-gradient" },
      { name: "flask", color: "pink-text-gradient" },
      { name: "aws", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/medical-chatbot.png",
    source_code_link: "https://github.com/Heyysekhar",
    live_link: "",
  },
  {
    name: "Spam Detection System",
    description:
      "End-to-end NLP Spam Detection using TF-IDF, Naive Bayes, Flask/FastAPI. Deployed on AWS with Docker containerization for scalable, reliable performance.",
    tags: [
      { name: "nlp", color: "blue-text-gradient" },
      { name: "docker", color: "green-text-gradient" },
      { name: "fastapi", color: "pink-text-gradient" },
      { name: "aws", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/spam-detection.png",
    source_code_link: "https://github.com/Heyysekhar",
    live_link: "",
  },
  {
    name: "ShopEase – Ecommerce",
    description:
      "Full-stack MERN e-commerce platform with JWT auth, Razorpay payments, Redux state management, Cloudinary image storage, and an admin analytics dashboard.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "razorpay", color: "pink-text-gradient" },
      { name: "redux", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/shopease.png",
    source_code_link: "https://github.com/Heyysekhar",
    live_link: "",
  },
  {
    name: "Wanderlust – Hotel Booking",
    description:
      "Airbnb-inspired hotel booking platform built with MERN stack, Passport.js authentication, Mapbox for interactive maps, and Cloudinary for photo uploads.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "passport.js", color: "green-text-gradient" },
      { name: "mapbox", color: "pink-text-gradient" },
      { name: "cloudinary", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/wanderlust.png",
    source_code_link: "https://github.com/Heyysekhar",
    live_link: "",
  },
];

const certifications = [
  {
    title: "Data Science with Generative AI",
    org: "PW Skills",
    date: "Feb 2026",
    color: "#915eff",
  },
  {
    title: "Full Stack Gen AI & Agentic AI with Python",
    org: "Udemy",
    date: "Feb 2026",
    color: "#00cea8",
  },
  {
    title: "Full Stack Web Development",
    org: "APNA College — Delta Batch",
    date: "Jul 2025",
    color: "#f12711",
  },
  {
    title: "Managing Machine Learning Projects",
    org: "Anthropic Courses",
    date: "2025",
    color: "#56ccf2",
  },
  {
    title: "Data Structures",
    org: "Online Certification",
    date: "2024",
    color: "#38ef7d",
  },
];

export { services, technologies, experiences, projects, certifications };
