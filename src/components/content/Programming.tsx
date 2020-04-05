import React from "react";
import { ProgrammingLanguage } from "models/Content";
import ColumnList from "./ColumnList";
import { SectionProps } from "./Section";

function translate(lang: ProgrammingLanguage): { primary: string; secondary: string } {
  return {
    primary: lang.name,
    secondary: `${lang.years} ${lang.years > 1 ? "years" : "year"} of ${lang.experience} experience ${lang.usage}`,
  };
}

export default function ProgrammingSection(props: SectionProps<ProgrammingLanguage>): JSX.Element {
  return (
    <ColumnList
      numOfColumns={1}
      entries={props.entries.map((entry: ProgrammingLanguage) => {
        return translate(entry);
      })}
    />
  );
}
