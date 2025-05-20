import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
}

export const Experiences: ExperienceInterface[] = [
  
  {
    id: "Quarto",
    companyName: "Quarto - Board Game",
    type: "Academic Project",
    category: ["AI"],
    shortDescription:
      "Built intelligent agents for the Quarto board game using Q-learning and Genetic Algorithms",
    githubLink: "https://github.com/yurnero14/Quarto",
    techStack: [
      "Python",
      "NumPy",
      "Pandas"
    ],
    startDate: new Date("2023-08-26"),
    endDate: new Date("2023-09-13"),
    companyLogoImg: "/experience/Polito.png",
   
  },

  {
    id: "GenderD",
    companyName: "Gender Detection",
    type: "Academic Project",
    category: ["ML/DL"],
    shortDescription:
      "Built gender classifiers using low-dimensional image embeddings and classical ML",
    githubLink: "https://github.com/yurnero14/GenderDetection",
    techStack: [
      "Python",
      "NumPy",
      "SciPy",
    ],
    startDate: new Date("2023-07-02"),
    endDate: new Date("2023-07-16"),
    companyLogoImg: "/experience/Polito.png",
   
  },

  {
    id: "BookRecommender",
    companyName: "Book Recommender - LLM",
    type: "Personal Project",
    category: ["AI", "UI/UX", "Data Analytics"],
    shortDescription:
      "An AI-powered semantic book recommendation engine that uses large language models (LLMs), vector databases, and zero-shot classification to deliver personalized book suggestions based on user input.",
    githubLink: "https://github.com/yurnero14/Book-Recommender",
    techStack: [
      "Python",
      "Pandas",
      "SciPy",
      "Langchain",
      "seaborn",
      "matplotlib",
    ],
    startDate: new Date("2023-07-02"),
    endDate: new Date("2023-07-16"),
    companyLogoImg: "/experience/Personal_Project.png",
   
  },

  {
    id: "Dicerolller",
    companyName: "Flutter - Dice Roller",
    type: "Personal Project",
    category: ["Mobile Dev", "UI/UX"],
    shortDescription:
      "Basic dice roller mobile app built to learn stateful widget management and UI design in Flutter",
    githubLink: "https://github.com/yurnero14/Flutter-Dice-Roller-App",
    techStack: [
      "Flutter",
      "Dart"
    ],
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-08-13"),
    companyLogoImg: "/experience/Personal_Project.png",
   
  },
  
  {
    id: "hiketracker",
    companyName: "Hike Tracker App",
    type: "Academic Project",
    category: ["Web Dev", "UI/UX", "Full Stack", "Scrum"],
    shortDescription:
      "React and Django full-stack app for route tracking (Scrum-based project). My major contributing came in frontend development and testing",
    githubLink: "https://github.com/yurnero14/Hike-Tracking",
    techStack: [
      "Javascript",
      "Django",
      "Python",
      "Docker",
      "React",
      "SQLite",
    ],
    startDate: new Date("2022-09-29"),
    endDate: new Date("2023-01-13"),
    companyLogoImg: "/experience/Polito.png",
   
  },
  {
    id: "categories",
    companyName: "Categories game",
    type: "Academic Project",
    category: ["Web Dev", "UI/UX", "Full Stack"],
    shortDescription:
      "Developed a full-stack web application replicating the classic game Categories using modern web technologies.",
    githubLink: "https://github.com/yurnero14/Categories",
    techStack: [
      "Javascript",
      "Node.js",
      "React",
      "express.js",
      "SQLite",
    ],
    startDate: new Date("2022-08-12"),
    endDate: new Date("2022-09-03"),
    companyLogoImg: "/experience/Polito.png",
   
  },

  {
    id: "ezwarehouse",
    companyName: "EzWarehouse",
    type: "Academic Project",
    category: ["Web Dev", "Backend"],
    shortDescription:
      "Collaborative backend inventory management system built with a strong focus on software engineering principles and full SDLC methodology.",
    githubLink: "https://github.com/yurnero14/EzWarehouse",
    techStack: [
      "Javascript",
      "Node.js",
      "express.js",
      "SQLite",
    ],
    startDate: new Date("2022-03-11"),
    endDate: new Date("2022-06-03"),
    companyLogoImg: "/experience/Polito.png",
   
  },

  {
    id: "habittracker",
    companyName: "Habit Tracker App",
    type: "Personal Project",
    category: ["Web Dev", "UI/UX", "Full Stack", "AI"],
    shortDescription:
      "Work in Progress: a full-stack productivity application with secure login and personalized habit tracking",
    githubLink: "https://github.com/yurnero14/Habit-tracker-ai",
    techStack: [
      "Javascript",
      "Node.js",
      "express.js",
      "MongoDB",
      "React",
      "Python",
    ],
    startDate: new Date("2025-04-14"),
    endDate: new Date("2025-06-30"),
    companyLogoImg: "/experience/Personal_Project.png",
   
  },

    {
    id: "instagramclone",
    companyName: "Instagram Clone App",
    type: "Personal Project",
    category: ["Web Dev", "UI/UX", "Full Stack"],
    shortDescription:
      "Work in Progress: Designed auth and home UI for an Instagram-like app. The backend of the app will be implemented using Firebase",
    githubLink: "https://github.com/yurnero14/Instagram-Clone",
    techStack: [
      "Javascript",
      "Firebase",
      "React",
    ],
    startDate: new Date("2024-10-30"),
    endDate: new Date("2025-06-30"),
    companyLogoImg: "/experience/Personal_Project.png",
   
  },

  {
    id: "OOD-Detection",
    companyName: "RT Anomaly Segmentation",
    type: "Academic Project",
    category: ["ML/DL"],
    shortDescription:
      "PyTorch, ERFNet for OOD pixel detection. Trained and evaluated segmentation models on Cityscapes and tested on Fishyscapes, RoadAnomaly21",
    githubLink: "https://github.com/Busso00/AML_ood_sem_segm",
    techStack: [
      "Python",
      "PyTorch",
      "NumPy",
      "SciPy",
      "Pandas"
    ],
    startDate: new Date("2024-07-25"),
    endDate: new Date("2024-09-12"),
    companyLogoImg: "/experience/Polito.png",
   
  },
  

  
];

export const featuredExperiences = Experiences.slice(0, 3);
