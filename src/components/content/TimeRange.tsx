import React from "react";
import { Typography } from "@material-ui/core";

const MILLISECONDS_DAY = 1000 * 60 * 60 * 24;
const DAYS_YEAR = 365;
const DAYS_MONTH = 30;

function timeInYearsBetween(start: Date, end?: Date): string {
  if (!end) {
    end = new Date();
  }
  const days = Math.round(Math.abs(start.getTime() - end.getTime()) / MILLISECONDS_DAY);
  const years = Math.floor(days / DAYS_YEAR);
  const months = Math.ceil((days % DAYS_YEAR) / DAYS_MONTH);
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
