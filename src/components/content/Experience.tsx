import React from "react";
import { Experience } from "models/Content";
import { SectionProps } from "./Section";
import MarkdownEntry from "components/content/MarkdownEntry";
import { Link, Typography } from "@material-ui/core";
import { DescriptionOutlined, HttpOutlined } from "@material-ui/icons";

function translate(entry: Experience): { title: string; summary: string } {
  return { title: `${entry.position} at ${entry.company}`, summary: entry.summary };
}

export default function ExperienceSection(props: SectionProps<Experience>): JSX.Element {
  return (
    <div>
      {props.entries.map((entry: Experience, index: number) => (
        <MarkdownEntry
          key={index}
          entry={translate(entry)}
          header={
            <div
              style={{
                display: "flex",
              }}
            >
              {entry.website && (
                <Link
                  target="_blank"
                  color="secondary"
                  underline="hover"
                  href={entry.website && entry.website.startsWith("http") ? entry.website : `https://${entry.website}`}
                  style={{
                    display: "flex",
                    paddingRight: 5,
                  }}
                >
                  <HttpOutlined />
                  {entry.website}
                </Link>
              )}
              {entry.referenceLetter && (
                <Link
                  target="_blank"
                  color="secondary"
                  underline="hover"
                  href={entry.referenceLetter}
                  style={{
                    display: "flex",
                  }}
                  download
                >
                  <DescriptionOutlined />
                  <Typography>Reference Letter</Typography>
                </Link>
              )}
            </div>
          }
          timeRangeProps={{ start: entry.start, end: entry.end, showTimeCalc: true }}
        />
      ))}
    </div>
  );
}
