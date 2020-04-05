import { Section, Publication } from "models/Content";

export const PublicationContent: Section = {
  title: "Publications",
  type: "publications",
  entries: [
    {
      ref: `
**Migrating towards microservices: migration and architecture smells.** 
_Andrés Carrasco, Brent van Bladel, and Serge Demeyer_. **2018**. 
In Proceedings of the 2nd International Workshop on Refactoring (IWoR 2018). Association for Computing Machinery, New York, NY, USA, 1–6. DOI:https://doi.org/10.1145/3242163.3242164`,
    },
  ] as Publication[],
};
