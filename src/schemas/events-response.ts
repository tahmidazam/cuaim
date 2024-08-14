import * as z from "zod";

export const CreatorSchema = z.object({
  email: z.string(),
});
export type Creator = z.infer<typeof CreatorSchema>;

export const EndSchema = z.object({
  dateTime: z.coerce.date(),
  timeZone: z.string(),
});
export type End = z.infer<typeof EndSchema>;

export const OrganizerSchema = z.object({
  email: z.string(),
  displayName: z.string(),
  self: z.boolean(),
});
export type Organizer = z.infer<typeof OrganizerSchema>;

export const ItemSchema = z.object({
  kind: z.string(),
  etag: z.string(),
  id: z.string(),
  status: z.string(),
  htmlLink: z.string(),
  created: z.coerce.date(),
  updated: z.coerce.date(),
  summary: z.string(),
  creator: CreatorSchema,
  organizer: OrganizerSchema,
  start: EndSchema,
  end: EndSchema,
  iCalUID: z.string(),
  sequence: z.number(),
  eventType: z.string(),
});
export type Item = z.infer<typeof ItemSchema>;

export const EventsResponseSchema = z.object({
  kind: z.string(),
  etag: z.string(),
  summary: z.string(),
  description: z.string(),
  updated: z.coerce.date(),
  timeZone: z.string(),
  accessRole: z.string(),
  defaultReminders: z.array(z.any()),
  items: z.array(ItemSchema),
});
export type EventsResponse = z.infer<typeof EventsResponseSchema>;
