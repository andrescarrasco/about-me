import React from "react";
import { Drawer, Divider, ListItem, ListItemText, Theme, ListItemIcon, List, ListSubheader } from "@material-ui/core";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import ProfileCard from "components/profile/ProfileCard";
import { Section, Profile } from "models/Content";
import { Code, Work, Build, LocalLibrary, Language, Public } from "@material-ui/icons";

const drawerWidth = "20vw";
const drawerMaxWidth = 280;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = (theme: Theme): any =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        maxWidth: drawerMaxWidth,
        flexShrink: 0,
      },
    },
    paper: {
      width: drawerWidth,
      maxWidth: drawerMaxWidth,
      background: theme.palette.primary.main,
    },
    color: {
      color: theme.palette.secondary.main,
    },
  });

interface AutoHideDrawerProps extends WithStyles<typeof useStyles> {
  windowWidth: number;
  showProfileCard: boolean;
  profile: Profile;
  sections: Section[];
}

class AutoHideDrawer extends React.Component<AutoHideDrawerProps, {}> {
  private getIcon(type: string): JSX.Element {
    if (type === "programming") {
      return <Code />;
    } else if (type === "experience") {
      return <Work />;
    } else if (type === "tools") {
      return <Build />;
    } else if (type === "education") {
      return <LocalLibrary />;
    } else if (type === "languages") {
      return <Language />;
    } else if (type === "publications") {
      return <Public />;
    }
    return <Code />;
  }

  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.props.windowWidth >= 1024 && (
          <nav className={classes.drawer}>
            <Drawer
              classes={{
                paper: classes.paper,
              }}
              color="primary"
              variant="persistent"
              open={this.props.windowWidth >= 1024}
            >
              <div>
                {this.props.showProfileCard && (
                  <React.Fragment>
                    <ProfileCard profile={this.props.profile} />
                    <Divider />
                  </React.Fragment>
                )}
                <List
                  subheader={
                    <ListSubheader className={classes.color} component="div">
                      Sections
                    </ListSubheader>
                  }
                >
                  {this.props.sections.map((section: Section, index: number) => (
                    <ListItem button key={index} component="a" href={`#${section.type}`}>
                      <ListItemIcon className={classes.color}>{this.getIcon(section.type)}</ListItemIcon>
                      <ListItemText className={classes.color} primary={section.title} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </nav>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(AutoHideDrawer);
