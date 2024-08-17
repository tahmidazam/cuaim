import { ContactLabelledHref } from "./contact-labelled-href";

export interface CommitteeMember {
  name: string;
  role: string;
  headline?: string;
  bio?: string;
  contact?: ContactLabelledHref[];
}
