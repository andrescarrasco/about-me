import { Section, Language } from "models/Content";

export const LanguageContent: Section = {
  title: "Spoken Languages",
  type: "languages",
  entries: [
    { name: "Spanish", level: "native" },
    { name: "English", level: "fluent" },
    { name: "German", level: "working" },
    { name: "Catalan", level: "working" },
    { name: "Japanese", level: "basic" },
  ] as Language[],
};
