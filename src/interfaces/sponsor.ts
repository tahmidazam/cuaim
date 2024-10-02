import { ContactLabelledHref } from "./contact-labelled-href";
import { SponsorTier } from "./sponsor-tier";

export interface Sponsor {
  tier: SponsorTier;
  name: string;
  description: string;
  contact?: ContactLabelledHref[];
}
