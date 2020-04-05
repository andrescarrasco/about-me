import { Profile } from "models/Content";
import headshot from "./profile.jpg";

export const ProfileContent: Profile = {
  name: "Andrés Carrasco",
  caption: `
I am an engineer with the heart of a craftsman. 
Persistent and eager to create reliable and extensible solutions with the appropriate tools. 
Fast learner of new technologies, jack-of-all-trades. 
Pragmatic and malleable. 
Culturally aware and a team-player.`,
  headshot: headshot,
  links: [
    { type: "email", username: "andres.c.k@gmail.com" },
    { type: "github", username: "andrescarrasco" },
    { type: "linkedin", username: "andres-carrasco-sw" },
  ],
};
