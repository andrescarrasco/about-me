import React from "react";
import { Education } from "models/Content";
import { SectionProps } from "./Section";
import MarkdownEntry from "components/content/MarkdownEntry";
import { Link, Typography } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";

function translate(entry: Education): { title: string; subtitle: string; summary: string } {
  return { title: entry.title, subtitle: `${entry.university} in ${entry.country}`, summary: entry.summary };
}

export default function EducationSection(props: SectionProps<Education>): JSX.Element {
  return (
    <div>
      {props.entries.map((entry: Education, index: number) => (
        <MarkdownEntry
          key={index}
          entry={translate(entry)}
          header={
            <React.Fragment>
              {entry.thesis && (
                <Link
                  target="_blank"
                  color="secondary"
                  underline="hover"
                  href={entry.thesis}
                  style={{
                    display: "flex",
                  }}
                  download
                >
                  <GetApp />
                  <Typography> Download Thesis</Typography>
                </Link>
              )}
            </React.Fragment>
          }
          timeRangeProps={{ start: entry.start, end: entry.end, showTimeCalc: false }}
        />
      ))}
    </div>
  );
}
