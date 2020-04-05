import React from "react";
import { EmailOutlined, LinkedIn, GitHub } from "@material-ui/icons";
import { Typography, Link } from "@material-ui/core";

interface ProfileLinkProps {
  type: "email" | "github" | "linkedin";
  username: string;
}

export default class ProfileLink extends React.Component<ProfileLinkProps, {}> {
  private getIcon(): JSX.Element {
    const style: React.CSSProperties = { maxWidth: 20, paddingRight: 5, objectFit: "contain" };
    if (this.props.type === "github") {
      return <GitHub style={style} />;
    } else if (this.props.type === "email") {
      return <EmailOutlined style={style} />;
    } else if (this.props.type === "linkedin") {
      return <LinkedIn style={style} />;
    }
    return <span />;
  }

  private getLink(): JSX.Element {
    if (this.props.type === "github") {
      return (
        <Link target="_blank" color="secondary" href={`https://github.com/${this.props.username}`} underline="hover">
          {`@${this.props.username}`}
        </Link>
      );
    } else if (this.props.type === "email") {
      return <span>{this.props.username}</span>;
    } else if (this.props.type === "linkedin") {
      return (
        <Link
          target="_blank"
          color="secondary"
          href={`https://www.linkedin.com/in/${this.props.username}`}
          underline="hover"
        >
          {`LinkedIn`}
        </Link>
      );
    }
    return <div />;
  }

  public render(): JSX.Element {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        {this.getIcon()}
        <Typography variant="subtitle2">{this.getLink()}</Typography>
      </div>
    );
  }
}
