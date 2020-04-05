import { Section, Education } from "models/Content";

export const EducationContent: Section = {
  title: "Education",
  type: "education",
  entries: [
    {
      start: new Date(2016, 9),
      end: new Date(2018, 6),
      title: "Master of Computer Science: Software Engineering",
      university: "University of Antwerp",
      country: "Belgium",
      thesis: "thesis/master.pdf",
      summary: `
After finishing my Bachelor's degree, I enrolled in the University of Antwerp, with the goal of deepening my knowledge in Software Engineering. 
At UAntwerpen, I revisited some of the different fields of informatics I was already familiar with. 
Most notably, I excelled my knowledge in the following fields:
- Software Reengineering
- Software Testing
- Networks and Distributed Computing
- Fault Tolerance

Moreover, during the program at UAntwerpen I fulfilled two research internships and a master thesis:

- __Migrating towards microservices: migration and architecture smells__.
In this research internship, I investigated the existing academic and grey literature for anti-patterns when migrating monolithic applications towards the novel microservice architecture.
This research resulted in a [scientific publication](https://doi.org/10.1145/3242163.3242164).
- __Increasing Reliability of Distributed SDN Controllers for Wireless Networks__.
In this research internship, I proposed and implemented a strategy for increasing reliability of Software Defined Networks using the [Raft consensus algorithm](https://raft.github.io/).
- __The Ubiquity of Test Smells: An Empirical Study__.
In this master thesis, I mined GitHub using [Boa](http://web.cs.ucla.edu/~shyoo1st/boa/) looking for the existence and frequency of 7 well known test smells. 
The study concludes that _Assertion Roulette_ is the most common followed by _Test Code Duplication_, _Assertionless_ and _Verbose Test_. 
Moreover, the larger a project is the more likely it contains test smell and where introduced when creating the test.
      `,
    },
    {
      start: new Date(2014, 9),
      end: new Date(2015, 2),
      title: "Erasmus Exchange Program",
      university: "Aalto University",
      country: "Finland",
      summary: `
For 6 months in three study periods, I focused on deepening my technical knowledge of information security, cloud computing, web development, and user-centred design.
The programming languages of choice in Aalto were Python and NodeJS, this allowed me to explore web development in Django, Android application development, and backend development in NodeJS and OpenStack.
However, I did not focus only on my technical skills. 
The program in Aalto allowed to develop my skills on intercultural communication, and teamwork.
Lastly, I tried to pick up on some _suomi_ with little to some success.
`,
    },
    {
      start: new Date(2012, 3),
      end: new Date(2016, 7),
      title: "BSc Software & Information Engineering",
      university: "Vienna University of Technology",
      country: "Austria",
      thesis: "thesis/bachelor.pdf",
      summary: `
At the Technical University of Vienna, I developed a keen understanding on developing software with high quality.
The study program allowed me to learn multiple programming languages from different _paradigma_ (e.g. functional, procedural, object-oriented, etc.) focusing heavily on Java.
Alongside programming languages, I learned about many different fields of informatics, most notably: user-centred design, software engineering and project management, distributed systems, and database systems.
Moreover, according to the study program I selected the following specializations:
- Software Quality Assurance
- Security
- Web Engineering
- Interface and Interaction Design

I concluded the bachelor by submitting a thesis titled __Scalability for data stream processing frameworks__.
In this thesis, I investigated the capability of different stream processing frameworks, like Apache Storm, for processing real-time data streams of varying volumes, i.e. volatile streams.
To achieve an efficient processing of these volatile streams I proposed, implemented, and evaluated an auto-scaling approach for Apache Storm.
`,
    },
    {
      start: new Date(2008, 8),
      end: new Date(2011, 6),
      title: "Licentiate Degree in Mechatronic Engineering (Not finished)",
      university: "Universidad Autónoma de Nuevo León",
      country: "Mexico",
      summary: `
For three years I studied the interdisciplinary field of mechatronics, allowing me to understand basic concepts of mechanical and electrical systems.
While studying at the Universidad Autónoma de Nuevo León, I discovered not only my interest for learning concepts on different fields of engineering, but also my passion for programming.
Unfortunately, I found the study program for software engineering lacking and decided to look for better education alternatives available to me.
After the sixth semester, I left my studies in favor of studying Software & Information Engineering at the Technical University of Vienna. 
      `,
    },
  ] as Education[],
};
