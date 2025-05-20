import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Sarib's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "A brief overview about my skill arsenal.",
    metadata: {
      title: "Skills",
      description:
        "Sarib's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting academic journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Muhammad Sarib Khan's experience in building diverse applications.",
    },
  },
  
  resume: {
    title: "Resume",
    description: "Muhammad Sarib Khan's resume.",
    metadata: {
      title: "Resume",
      description: "Sarib's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Sarib's professional journey and career timeline.",
    },
  },
};
