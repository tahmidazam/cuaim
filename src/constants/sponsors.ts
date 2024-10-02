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
  description: "",
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
