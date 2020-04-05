import React from "react";
import { Typography, Divider } from "@material-ui/core";
import { Section, Education, ProgrammingLanguage, Tool, Experience, Language, Publication } from "models/Content";
import ProgrammingSection from "components/content/Programming";
import ToolSection from "components/content/Tools";
import ExperienceSection from "components/content/Experience";
import LanguageSection from "components/content/Language";
import EducationSection from "components/content/Education";
import PublicationSection from "components/content/Publication";

interface SectionComponentProps {
  section: Section;
}

export interface SectionProps<T> {
  entries: T[];
}

export default class SectionComponent extends React.Component<SectionComponentProps, {}> {
  public render(): JSX.Element {
    return (
      <div id={this.props.section.type} style={{ marginTop: 5, marginBottom: 5 }}>
        <Typography variant="h5">{this.props.section.title}</Typography>
        <Divider />
        {this.props.section.type === "education" && (
          <EducationSection entries={this.props.section.entries as Education[]} />
        )}
        {this.props.section.type === "programming" && (
          <ProgrammingSection entries={this.props.section.entries as ProgrammingLanguage[]} />
        )}
        {this.props.section.type === "tools" && <ToolSection entries={this.props.section.entries as Tool[]} />}
        {this.props.section.type === "experience" && (
          <ExperienceSection entries={this.props.section.entries as Experience[]} />
        )}
        {this.props.section.type === "languages" && (
          <LanguageSection entries={this.props.section.entries as Language[]} />
        )}
        {this.props.section.type === "publications" && (
          <PublicationSection entries={this.props.section.entries as Publication[]} />
        )}
      </div>
    );
  }
}
