import React from "react";
import { Typography } from "@material-ui/core";
import moment from "moment";

function timeInYearsBetween(start: Date, end?: Date): string {
  if (!end) {
    end = new Date();
  }
  const _start = moment(start).startOf("month");
  const _end = moment(end).endOf("month");
  const duration = moment.duration(_end.diff(_start));
  const months = Math.floor(duration.asMonths() % 12);
  const years = Math.floor(Math.ceil(duration.asMonths()) / 12);
  let result = "";
  if (years) {
    result += `${years} ${years > 1 ? "yrs" : "yr"}`;
  }
  if (months) {
    result += ` ${months} ${months > 1 ? "mos" : "mo"}`;
  }
  return result.trim();
}

export interface TimeRangeProps {
  start: Date;
  end?: Date;
  showTimeCalc: boolean;
  style?: React.CSSProperties;
}

export default function TimeRange(props: TimeRangeProps): JSX.Element {
  return (
    <span style={props.style}>
      <Typography style={{ fontWeight: "bold" }}>
        {`${props.start.getFullYear()}.${props.start.getMonth()} - `}
        {props.end ? `${props.end.getFullYear()}.${props.end.getMonth()}` : "present"}
        {props.showTimeCalc ? ` (${timeInYearsBetween(props.start, props.end)})` : ""}
      </Typography>
    </span>
  );
}
