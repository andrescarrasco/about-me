import React from "react";
import TimeRange, { TimeRangeProps } from "components/content/TimeRange";
import { Typography } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

interface MarkdownEntryProps<T extends TProps> {
  entry: T;
  header?: JSX.Element;
  timeRangeProps: TimeRangeProps;
}

interface TProps {
  title: string;
  subtitle?: string;
  summary: string;
}

export default function MarkdownEntry<T extends TProps>(props: MarkdownEntryProps<T>): JSX.Element {
  return (
    <React.Fragment>
      <Typography variant="h6">{props.entry.title}</Typography>
      {props.entry.subtitle && <Typography variant="subtitle2">{props.entry.subtitle}</Typography>}
      <TimeRange {...props.timeRangeProps} />
      {props.header}
      <ReactMarkdown source={props.entry.summary} />
    </React.Fragment>
  );
}
