import { CommitteeMember } from "@/interfaces/committee-member";

export const committeeMembers: CommitteeMember[] = [
  {
    name: "Neil Sardesai",
    role: "President",
    headline: "Clinical School, 4th Year",
  },
  {
    name: "Sharon Ho",
    role: "Treasurer",
  },
  {
    name: "Zoya Yasmine",
    role: "Graphics",
  },
  {
    name: "Arzina Ismaili",
    role: "Engineering Representative",
  },
  {
    name: "Harshvir Grewal",
    role: "Events Officer",
  },
  {
    name: "Keshav Kedia",
    role: "Events Officer",
    headline: "MedST IB",
    bio: '> *"I\'m a second year medic at Caius fascinated to explore how AI will interface with doctors in future healthcare delivery. I will be helping to organise events and socials for the society throughout the coming year!"*',
    contact: [
      {
        href: "mailto:kk814@cam.ac.uk",
        label: "Email",
      },
    ],
  },
  {
    name: "Tahmid Azam",
    role: "Webmaster",
    headline: "MedST IB",
    bio: '> *"I\'m a second year medic at Emmanuel passionate about applications of ML to clinical practice, particularly in the disabled community."*',
    contact: [
      {
        href: "mailto:ta549@cam.ac.uk",
        label: "Email",
      },
      {
        href: "https://www.github.com/tahmidazam",
        label: "GitHub",
      },
      {
        href: "https://www.linkedin.com/in/tahmid-azam/",
        label: "LinkedIn",
      },
      {
        href: "https://www.instagram.com/tahmid.az/",
        label: "Instagram",
      },
    ],
  },
];
