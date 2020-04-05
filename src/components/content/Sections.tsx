import React from "react";
import { Theme, Divider } from "@material-ui/core";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import SectionProfile from "components/profile/SectionProfile";
import SectionComponent from "components/content/Section";
import { Section, Profile } from "models/Content";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = (theme: Theme): any =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  });

interface SectionsProps extends WithStyles<typeof useStyles> {
  sections: Section[];
  profile: Profile;
  onSectionProfileOutOfView: (hidden: boolean) => void;
}

class Sections extends React.Component<SectionsProps, {}> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <SectionProfile
          profile={this.props.profile}
          onOutOfView={(hidden: boolean): void => this.props.onSectionProfileOutOfView(hidden)}
        />
        <Divider />
        {this.props.sections.map(
          (section: Section, index: number): JSX.Element => {
            return <SectionComponent key={index} section={section} />;
          },
        )}
      </main>
    );
  }
}

export default withStyles(useStyles)(Sections);
