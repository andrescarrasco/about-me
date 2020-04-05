export default interface Content {
  sections: Section[];
}

export interface Section {
  title: string;
  type: "education" | "programming" | "tools" | "experience" | "languages" | "publications" | "profile";
  entries: Education[] | ProgrammingLanguage[] | Tool[] | Experience[] | Publication[] | Profile[];
}

export interface Profile {
  name: string;
  caption: string;
  headshot: string;
  links: ProfileLink[];
}

export interface ProfileLink {
  type: "email" | "github" | "linkedin";
  username: string;
}

export interface Experience {
  start: Date;
  end?: Date;
  position: string;
  company: string;
  location: string;
  website: string;
  summary: string;
  referenceLetter?: string;
}

export interface Education {
  start: Date;
  end?: Date;
  title: string;
  university: string;
  country: string;
  summary: string;
  thesis?: string;
}

export interface ProgrammingLanguage {
  name: string;
  years: number;
  experience: string;
  usage: string;
}

export interface Tool {
  name: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Publication {
  ref: string;
}
