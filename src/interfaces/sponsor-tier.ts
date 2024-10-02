import { z } from "zod";

export const sponsorTiers = ["bronze", "silver", "gold", "platinum"] as const;
export const SponsorTierEnum = z.enum(sponsorTiers);
export type SponsorTier = z.infer<typeof SponsorTierEnum>;
