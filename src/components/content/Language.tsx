import React from "react";
import { Language } from "models/Content";
import ColumnList from "components/content/ColumnList";
import { SectionProps } from "./Section";

function translate(lang: Language): { primary: string; secondary: string } {
  return { primary: lang.name, secondary: `${lang.level} proficiency` };
}

export default function LanguageSection(props: SectionProps<Language>): JSX.Element {
  return (
    <ColumnList
      numOfColumns={props.entries.length}
      entries={props.entries.map((entry: Language) => {
        return translate(entry);
      })}
    />
  );
}
