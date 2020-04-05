import React from "react";
import { Tool } from "models/Content";
import ColumnList from "./ColumnList";
import { SectionProps } from "./Section";

export default function ToolSection(props: SectionProps<Tool>): JSX.Element {
  const entries: { primary: string }[] = [];
  for (const entry of props.entries) {
    entries.push({ primary: entry.name });
  }
  return <ColumnList numOfColumns={6} entries={entries} />;
}
