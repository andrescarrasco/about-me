import { Section, Experience } from "models/Content";

export const ExperienceContent: Section = {
  title: "Professional Experience",
  type: "experience",
  entries: [
    {
      start: new Date(2020, 7),
      company: "Austrian Institute of Technology GmbH",
      position: "Research Engineer",
      website: "https://www.ait.ac.at",
      location: "Vienna, Austria",
    },
    {
      start: new Date(2018, 7),
      end: new Date(2020, 6),
      company: "Byteflies",
      position: "Software Engineer and Scrum Master",
      website: "www.byteflies.com",
      location: "Antwerp, Belgium",
      summary: `
As Software Engineer and Scrum Master, I am tasked to develop and maintain a data collection solution for the healthcare sector, while helping the team keep a high focus on value creation and high quality standards. 

Some of my responsibilities include:

- Assessing and selecting tools and technologies for future development
- Planning and estimating feature development
- Ensuring scrum principles are followed, and have a spirit of continuous improvement
- Ensuring software development conforms to the life-cycle requirements of a medical device (IEC 62304:2006)

As well as, designing, developing, and maintaining:
- A CI/CD pipeline for the development of the front-end and back-end services
- A RESTful API using AWS Serverless Application Model, NodeJS, and TypeScript
- A back-end infrastructure using AWS IoT, AWS CloudFormation and other AWS services
- Multiple client applications using React and TypeScript
- Signal collection devices in Golang and, to a lesser extent, C++
- Legacy solutions using Electron, Angular, PostgreSQL, and NodeJS`,
    },
    {
      start: new Date(2015, 7),
      end: new Date(2016, 8),
      position: "Software Developer",
      website: "www.cenarion.com",
      company: "Cenarion",
      location: "Vienna, Austria",
      referenceLetter: "references/cenarion.pdf",
      summary: `
As a Software Developer I fulfilled two roles during my time working for Cenarion.

At the beginning, I started as intern of the team developing of a [workflow management system](https://cenarion.com/leistungen/versicherungsloesungen.html) (NEXA Plus) for the insurance sector in Java. 
Throughout my internship I gradually contributed to the team starting with small tasks, however, I quickly got more responsibility from my colleagues.
At the end of my internship, I was part of the development team, and thus got hired as a Software Developer.

I contributed for the next months to the core development of NEXA Plus, and also in the maintenance of legacy versions of the NEXA solution. 

Some of my main responsibilities at this role included:

- Fulfill feature requests from design to implementation utilizing Java, the Spring Framework, Hibernate, bare MySQL for optimized queries, JavaFX, Google Web Toolkit, among other tools.
- Reviewing code from colleagues
- Test the application before new releases, and ensure their proper deployment
- Give 3rd level customer support 

Not long after, I was tasked to take over the development of a cloud-based social business tool ([Labelizer](https://labelizer.cenarion.com/)) as the main developer.
The application was developed using the Google Cloud Platform, and the Gmail and Contacts API, using agile methodology, receiving feedback and feature requests from users.
During my time as the main developer we successfully increased our client base by ~30%.

Some of my main responsibilities at this role included:

- Drive the development of the application using user feedback
- Give 3rd level customer support 
- Normalize the software development process
- Stabilize, and develop the application further using Java, JSP, and MySQL
- Deployment of the application into clients' G Suite`,
    },
  ] as Experience[],
};
