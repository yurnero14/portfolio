import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Java",
    description:
      "Used primarily in big data projects with Hadoop and Spark; familiar with core syntax and concepts.",
    rating: 3,
    icon: Icons.java,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },

  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Next.js",
    description:
      "A beginner in this framework, more projects to come.",
    rating: 1,
    icon: Icons.nextjs,
  },
  
  
  
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 3,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  

  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 2,
    icon: Icons.mui,
  },

  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 3,
    icon: Icons.tailwindcss,
  },

  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases for data-driven applications.",
    rating: 3,
    icon: Icons.mysql,
  },

  {
    name: "C++",
    description:
      "My gateway into programming; solid grasp of core concepts, even if it’s been a while since we last coded together",
    rating: 3,
    icon: Icons.cplusplus,
  },

  {
    name: "Python",
    description:
      "Used across multiple and diverse ML, LLMs, data analytics, and computational intelligence projects.",
    rating: 5,
    icon: Icons.python,
  },

  {
    name: "Django",
    description:
      "Worked on a full-stack Django project in uni; focused on API testing, integration, and backend concepts",
    rating: 3,
    icon: Icons.django,
  },

  {
    name: "Hadoop",
    description:
      "Gained hands-on experience with batch processing and MapReduce through coursework; developed and ran code on Hadoop for multiple big data assignments.",
    rating: 4,
    icon: Icons.hadoop,
  },

  {
    name: "Spark",
    description:
      "Built practical understanding of distributed in-memory processing; wrote Spark programs for large-scale data handling and analytics tasks.",
    rating: 4,
    icon: Icons.spark,
  },

  {
    name: "Flutter",
    description:
      "ntroduced to mobile app development through a small project; gained working knowledge of stateless and stateful widgets and UI structure.",
    rating: 2,
    icon: Icons.flutter,
  },

  {
    name: "ChakraUI",
    description:
      "Used Chakra UI to build a personal web project; familiar with component styling and layout structuring using its design system.",
    rating: 2,
    icon: Icons.chakraui,
  },

  {
    name: "Mocha",
    description:
      "Conducted extensive unit and integration testing in a Node.js backend project; confident in writing and organizing test cases using Mocha.",
    rating: 4,
    icon: Icons.mocha,
  },

  {
    name: "Pytorch",
    description:
      "Used PyTorch in a few deep learning projects; comfortable navigating its repo structure and applying it in practice.",
    rating: 3,
    icon: Icons.pytorch,
  },

  {
    name: "Scikitlearn",
    description:
      "Strong familiarity with scikit-learn and used it extensively for machine learning workflows, from preprocessing to model evaluation.",
    rating: 4,
    icon: Icons.scikitlearn,
  },

  {
    name: "Postman",
    description:
      "Proficient in API testing and automation with Postman; confident in building requests, chaining tests, and debugging endpoints.",
    rating: 5,
    icon: Icons.postman,
  },

  {
    name: "Latex",
    description:
      "Experienced in writing structured academic documents, reports, and technical documentation using LaTeX",
    rating: 4,
    icon: Icons.latex,
  },

  {
    name: "Docker",
    description:
      "Familiar with the basics of containerization have used Docker for simple development setups and running existing images.",
    rating: 2,
    icon: Icons.docker,
  },

  {
    name: "Pandas",
    description:
      "Core part of my data analytics and ML work; used extensively during my internship for data cleaning, transformation, and exploratory analysis.",
    rating: 5,
    icon: Icons.pandas,
  },

  {
    name: "NumPy",
    description:
      "Daily driver for numerical operations; used in nearly every machine learning or data-heavy project I've worked on.",
    rating: 5,
    icon: Icons.numpy,
  },

  {
    name: "SciPy",
    description:
      "Daily driver for numerical operations; used in nearly every machine learning or data-heavy project I've worked on.",
    rating: 4,
    icon: Icons.scipy,
  },

  {
    name: "PowerBi",
    description:
      "Built dashboards and visual reports during my internship; comfortable connecting data sources and designing insights for end-users.",
    rating: 4,
    icon: Icons.powerbi,
  },

  {
    name: "Firebase",
    description:
      "Beginner-level experience; used Firebase Auth and Firestore in a personal project.",
    rating: 1,
    icon: Icons.firebase,
  },

  {
    name: "Databricks",
    description:
      "Used Databricks notebooks during my internship for big data processing, visualization, and Spark-based workflows.",
    rating: 3,
    icon: Icons.spark,
  },

 
 
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
