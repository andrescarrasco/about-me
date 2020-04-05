import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Profile } from "models/Content";
import ProfileLink from "components/profile/ProfileLink";
import ProfilePicture from "components/profile/ProfilePicture";

interface SectionProfileProps {
  profile: Profile;
  onOutOfView: (hidden: boolean) => void;
}

interface SectionProfileState {
  height: number;
}

export default class SectionProfile extends React.Component<SectionProfileProps, SectionProfileState> {
  constructor(props: SectionProfileProps) {
    super(props);
    this.state = { height: 0 };
  }

  public componentDidMount(): void {
    window.addEventListener("scroll", () => this.handleScroll());
    this.updateHeight();
  }

  public componentWillUnmount(): void {
    window.removeEventListener("scroll", () => this.handleScroll());
  }

  private updateHeight(): void {
    const height = document.getElementById("section-profile-container")?.clientHeight;
    if (height && height !== this.state.height) {
      this.setState({ height });
    }
  }

  private handleScroll(): void {
    this.updateHeight();
    if (window.scrollY > this.state.height + 20) {
      this.props.onOutOfView(true);
    } else {
      this.props.onOutOfView(false);
    }
  }

  public render(): JSX.Element {
    return (
      <Grid container id={"section-profile-container"}>
        <Grid item sm={3} style={{ maxWidth: 200, marginRight: 20 }}>
          <ProfilePicture src={this.props.profile.headshot} name={this.props.profile.name} maxWidth={200} />
        </Grid>
        <Grid item container sm={9} direction="column" alignItems="flex-start">
          <Grid item xs>
            <Typography variant="h4" component="h2" align="left">
              {this.props.profile.name}
            </Typography>
            <Typography variant="caption" component="span" align="left" style={{ fontStyle: "italic" }}>
              {this.props.profile.caption}
            </Typography>
          </Grid>
          <Grid item container xs direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
            {this.props.profile.links.map(link => (
              <Grid key={`${link.type}-${link.username}`} item>
                <ProfileLink type={link.type} username={link.username} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
