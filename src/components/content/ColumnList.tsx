import React from "react";
import { List, ListItem, ListItemText, Grid } from "@material-ui/core";

interface ColumnListProps<T extends TProps> extends ColumnProps<T> {
  numOfColumns: number;
}

interface ColumnProps<T extends TProps> {
  entries: T[];
}

interface TProps {
  primary: string;
  secondary?: string;
}

export default class ColumnList<T extends TProps> extends React.Component<ColumnListProps<T>, {}> {
  public render(): JSX.Element {
    const columns = [];
    const columnLength = Math.ceil(this.props.entries.length / this.props.numOfColumns);
    for (let i = 0; i < Math.ceil(this.props.entries.length / columnLength); i++) {
      const start = i * columnLength;
      columns.push(this.props.entries.slice(start, start + columnLength));
    }
    return (
      <Grid container>
        {columns.map(
          (entries: T[], index: number): JSX.Element => {
            return (
              <Grid key={index} xs={"auto"} item>
                <Column<T> entries={entries} />
              </Grid>
            );
          },
        )}
      </Grid>
    );
  }
}

function Column<T extends TProps>(props: ColumnProps<T>): JSX.Element {
  return (
    <List>
      {props.entries.map(
        (entry: T, index: number): JSX.Element => (
          <ListItem key={index}>
            <ListItemText primary={entry.primary} secondary={entry.secondary} />
          </ListItem>
        ),
      )}
    </List>
  );
}
