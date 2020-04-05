import React from "react";
import { Publication } from "models/Content";
import { SectionProps } from "./Section";
import ReactMarkdown from "react-markdown";

export default function PublicationSection(props: SectionProps<Publication>): JSX.Element {
  return (
    <div>
      {props.entries.map((entry: Publication, index: number) => (
        <React.Fragment key={index}>
          <ReactMarkdown source={entry.ref} />
        </React.Fragment>
      ))}
    </div>
  );
}
