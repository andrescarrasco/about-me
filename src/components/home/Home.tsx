import React from "react";
import AutoHideDrawer from "components/sidenav/AutoHideDrawer";
import Sections from "components/content/Sections";
import Content from "models/Content";
import {
  ProfileContent,
  ExperienceContent,
  EducationContent,
  ProgrammingContent,
  ToolContent,
  PublicationContent,
  LanguageContent,
} from "assets";

const model: Content = {
  sections: [ExperienceContent, ProgrammingContent, ToolContent, PublicationContent, EducationContent, LanguageContent],
};

interface HomeState {
  windowWidth: number;
  showProfileCard: boolean;
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);
    this.state = { windowWidth: window.innerWidth, showProfileCard: false };
  }

  componentDidMount(): void {
    window.addEventListener("resize", () => this.updateWindowDimensions());
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", () => this.updateWindowDimensions());
  }

  updateWindowDimensions(): void {
    this.setState({ windowWidth: window.innerWidth });
  }

  public render(): JSX.Element {
    return (
      <div style={{ display: "flex" }}>
        <AutoHideDrawer
          sections={model.sections}
          windowWidth={this.state.windowWidth}
          profile={ProfileContent}
          showProfileCard={this.state.showProfileCard}
        />
        <Sections
          sections={model.sections}
          profile={ProfileContent}
          onSectionProfileOutOfView={(hidden: boolean): void => this.setState({ showProfileCard: hidden })}
        />
      </div>
    );
  }
}
