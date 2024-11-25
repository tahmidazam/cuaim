import { Sponsor } from "@/interfaces/sponsor";

export const APTA: Sponsor = {
  name: "Apta",
  tier: "bronze",
  description: "",
  contact: [
    {
      label: "Website",
      href: "https://www.apta.chat/team",
      handle: "www.apta.chat",
    },
    {
      label: "X",
      href: "https://x.com/APTA",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/aptaai/",
      handle: "@aptaai",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/apta-ai/",
    },
  ],
};

export const ORZONE: Sponsor = {
  name: "Orzone",
  tier: "platinum",
  description:
    "As the most comprehensive platform for medical assessment, Orzone offers a holistic view of student progression at both individual and cohort levels. It also identifies gaps in education and assesses the quality of learning and teaching, helping faculty continuously improve courses. The platform supports all modalities needed for complex medical curricula, including KBA exams, clinical evaluations, OSCEs, EPAs, assignments, rotations, and peer reviews.\n\nPowered by cutting-edge technology for rapid data exploration, Orzone enables institutions to gather billions of data points from students, educators, and clinicians, delivering real-time analytics and AI insights for informed decision-making.\n\nThe platform can be used standalone or integrated with systems such as Canvas, Moodle, and other learning management systems.\n\nVisit www.orzone.com for more information",
  contact: [
    {
      label: "Website",
      href: "https://www.orzone.com",
      handle: "www.orzone.com",
    },
    {
      label: "Telephone",
      href: "tel:+46 31 37 58 684",
      handle: "+46 31 37 58 684",
    },
    {
      label: "Email",
      href: "mailto:info@orzone.com",
      handle: "info@orzone.com",
    },
    {
      label: "X",
      href: "https://x.com/OrzoneAB",
      handle: "@OrzoneAB",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/280301/",
      handle: "Orzone",
    },
  ],
};

export const UNIVERSITY_OF_CAMBRIDGE: Sponsor = {
  name: "University of Cambridge",
  tier: "silver",
  description: "",
  contact: [
    {
      label: "Website",
      href: "https://www.cam.ac.uk",
      handle: "www.cam.ac.uk",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/cambridgeuniversity/",
      handle: "@cambridgeuniversity",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/school/4522/",
    },
    {
      label: "Twitter",
      href: "https://x.com/cambridge_uni",
      handle: "@Cambridge_Uni",
    },
  ],
};

export const ALL_SPONSORS: Sponsor[] = [APTA, ORZONE, UNIVERSITY_OF_CAMBRIDGE];
