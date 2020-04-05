import { Section, ProgrammingLanguage } from "models/Content";

export const ProgrammingContent: Section = {
  title: "Programming Languages",
  type: "programming",
  entries: [
    {
      name: "JavaScript/TypeScript",
      years: 6,
      experience: "professional and university",
      usage: "at TUWien, Cenarion, and Byteflies",
    },
    {
      name: "Java",
      years: 5,
      experience: "professional and university",
      usage: "at TUWien and Cenarion",
    },
    {
      name: "Python",
      years: 2,
      experience: "self-taught",
      usage: "at TUWien, Aalto University, and UAntwerpen",
    },
    {
      name: "Golang",
      years: 1,
      experience: "professional",
      usage: "at Byteflies",
    },
  ] as ProgrammingLanguage[],
};
