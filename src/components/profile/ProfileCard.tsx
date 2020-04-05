import React from "react";
import { Card, CardContent, Typography, Theme, createStyles, withStyles, WithStyles } from "@material-ui/core";
import { Profile } from "models/Content";
import ProfileLink from "components/profile/ProfileLink";
import ProfilePicture from "components/profile/ProfilePicture";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = (theme: Theme): any =>
  createStyles({
    card: {
      background: theme.palette.primary.main,
    },
  });

interface ProfileCardProps extends WithStyles<typeof useStyles> {
  profile: Profile;
}

class ProfileCard extends React.Component<ProfileCardProps, {}> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <ProfilePicture src={this.props.profile.headshot} name={this.props.profile.name} maxWidth={"100%"} />
          <Typography variant="h6" component="h2" align="center">
            {this.props.profile.name}
          </Typography>
          {this.props.profile.links.map(link => (
            <ProfileLink key={`${link.type}-${link.username}`} type={link.type} username={link.username} />
          ))}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyles)(ProfileCard);
