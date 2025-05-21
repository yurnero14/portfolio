import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "stellantis",
    position: "Data Analytics Intern",
    company: "Stellantis",
    location: "Torino, Italy",
    startDate: new Date("2023-11-13"),
    endDate: new Date("2024-05-01"),
    description: [
      "Collaborated with a cross-functional team on the Forecast Order Generator (FOG) project",
      "Developed a PoC for Capacity Constraint Analysis using pandas to support plant order fulfillment",
      "Assisted the development of Order Matching module to compare forecasted and actual orders, improving forecast accuracy",
      "Built LLM-based prototypes using spaCy and BERT to suggest alternative options via similarity scores like cosine similarity",
      "Designed Power BI dashboards to visualize constrained parts and matched orders",
      "Used DB Browser to inspect and validate data structures during PoC testing",
      "Performed constraint analysis on live data after PoC validation"

    ],
    skills: ["Python", "Pandas", "Databricks", "PowerBI", "spaCy", "BERT", "DB Browser"],
    companyUrl: "https://www.stellantis.com/en",
    logo: "/career/Stella.png",
  },

  {
    id: "abb_swiss",
    position: "Executive Engineer",
    company: "ABB Switzerland Ltd.",
    location: "Manama, Bahrain",
    startDate: new Date("2020-12-07"),
    endDate: new Date("2021-07-01"),
    description: [
      "Managed client communications and supervised engineers/technicians across two major projects",
      "Produced monthly technical reports and analytics dashboards",
      "Acted as liaison between field teams and corporate/HR for operational coordination",
    ],
    skills: ["MS Excel", "MS Project"],
    companyUrl: "https://global.abb/group/en",
    logo: "/career/ABB.png",
  },

  {
    id: "descon",
    position: "Junior Business Development Executive",
    company: "Descon Power Solutions",
    location: "Lahore, Pakistan",
    startDate: new Date("2019-12-03"),
    endDate: new Date("2020-03-01"),
    description: [
      "Researched upcoming renewable energy projects to identify potential leads",
      "Applied data-informed strategies to analyze prospects",
      "Contributed to technical tender documentation and client pitch presentations",
    ],
    skills: ["MS Excel", "MS Office"],
    companyUrl: "https://www.descon.com/dps/about/",
    logo: "/career/Descon.png",
  },

  {
    id: "abb_pak",
    position: "Sales Engineering Intern",
    company: "ABB Power and Automation Ltd",
    location: "Lahore, Pakistan",
    startDate: new Date("2019-08-01"),
    endDate: new Date("2019-10-01"),
    description: [
      "Supported the sales team in resolving technical issues and client requests",
      "Assisted in proposal development and presented solutions to potential clients",
     
    ],
    skills: ["MS Excel", "MS Office"],
    companyUrl: "https://global.abb/group/en",
    logo: "/career/ABB.png",
  },


];
