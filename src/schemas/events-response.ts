import { z } from "zod";

// Schemas adapted from the response type of the Events: list endpoint on the Google Calendar API.
// Read more: https://developers.google.com/calendar/api/v3/reference/events/list

export const DefaultReminderSchema = z.object({
  method: z.string(),
  minutes: z.number(),
});
export type DefaultReminder = z.infer<typeof DefaultReminderSchema>;

const CreatorSchema = z.object({
  id: z.string().optional(),
  email: z.string(),
  displayName: z.string().optional(),
  self: z.boolean().optional(),
});
export type Creator = z.infer<typeof CreatorSchema>;

const OrganizerSchema = z.object({
  id: z.string().optional(),
  email: z.string(),
  displayName: z.string(),
  self: z.boolean(),
});
export type Organizer = z.infer<typeof OrganizerSchema>;

const StartSchema = z.object({
  date: z.coerce.date().optional(),
  dateTime: z.coerce.date(),
  timeZone: z.string(),
});
export type Start = z.infer<typeof StartSchema>;

const EndSchema = z.object({
  date: z.coerce.date().optional(),
  dateTime: z.coerce.date(),
  timeZone: z.string(),
});
export type End = z.infer<typeof EndSchema>;

const OriginalStartTimeSchema = z.object({
  date: z.date(),
  dateTime: z.string().datetime(),
  timeZone: z.string(),
});
export type OriginalStartTime = z.infer<typeof OriginalStartTimeSchema>;

const AttendeeSchema = z.object({
  id: z.string(),
  email: z.string(),
  displayName: z.string(),
  organizer: z.boolean(),
  self: z.boolean(),
  resource: z.boolean(),
  optional: z.boolean(),
  responseStatus: z.string(),
  comment: z.string(),
  additionalGuests: z.number().int(),
});
export type Attendee = z.infer<typeof AttendeeSchema>;

const ExtendedPropertiesSchema = z.object({
  private: z.record(z.string()),
  shared: z.record(z.string()),
});
export type ExtendedProperties = z.infer<typeof ExtendedPropertiesSchema>;

const ConferenceSolutionKeySchema = z.object({
  type: z.string(),
});
export type ConferenceSolutionKey = z.infer<typeof ConferenceSolutionKeySchema>;

const StatusSchema = z.object({
  statusCode: z.string(),
});
export type Status = z.infer<typeof StatusSchema>;

const CreateRequestSchema = z.object({
  requestId: z.string(),
  conferenceSolutionKey: ConferenceSolutionKeySchema,
  status: StatusSchema,
});
export type CreateRequest = z.infer<typeof CreateRequestSchema>;

const EntryPointSchema = z.object({
  entryPointType: z.string(),
  uri: z.string(),
  label: z.string(),
  pin: z.string(),
  accessCode: z.string(),
  meetingCode: z.string(),
  passcode: z.string(),
  password: z.string(),
});
export type EntryPoint = z.infer<typeof EntryPointSchema>;

const ConferenceSolutionSchema = z.object({
  key: ConferenceSolutionKeySchema,
  name: z.string(),
  iconUri: z.string(),
});
export type ConferenceSolution = z.infer<typeof ConferenceSolutionSchema>;

const ConferenceDataSchema = z.object({
  createRequest: CreateRequestSchema,
  entryPoints: z.array(EntryPointSchema),
  conferenceSolution: ConferenceSolutionSchema,
  conferenceId: z.string(),
  signature: z.string(),
  notes: z.string(),
});
export type ConferenceData = z.infer<typeof ConferenceDataSchema>;

const GadgetSchema = z.object({
  type: z.string(),
  title: z.string(),
  link: z.string(),
  iconLink: z.string(),
  width: z.number().int(),
  height: z.number().int(),
  display: z.string(),
  preferences: z.record(z.string()),
});
export type Gadget = z.infer<typeof GadgetSchema>;

const OverrideSchema = z.object({
  method: z.string(),
  minutes: z.number().int(),
});
export type Override = z.infer<typeof OverrideSchema>;

const RemindersSchema = z.object({
  useDefault: z.boolean(),
  overrides: z.array(OverrideSchema),
});
export type Reminders = z.infer<typeof RemindersSchema>;

const SourceSchema = z.object({
  url: z.string(),
  title: z.string(),
});
export type Source = z.infer<typeof SourceSchema>;

const CustomLocationSchema = z.object({
  label: z.string(),
});
export type CustomLocation = z.infer<typeof CustomLocationSchema>;

const OfficeLocationSchema = z.object({
  buildingId: z.string(),
  floorId: z.string(),
  floorSectionId: z.string(),
  deskId: z.string(),
  label: z.string(),
});
export type OfficeLocation = z.infer<typeof OfficeLocationSchema>;

const WorkingLocationPropertiesSchema = z.object({
  type: z.string(),
  homeOffice: z.any(),
  customLocation: CustomLocationSchema,
  officeLocation: OfficeLocationSchema,
});
export type WorkingLocationProperties = z.infer<
  typeof WorkingLocationPropertiesSchema
>;

const OutOfOfficePropertiesSchema = z.object({
  autoDeclineMode: z.string(),
  declineMessage: z.string(),
});
export type OutOfOfficeProperties = z.infer<typeof OutOfOfficePropertiesSchema>;

const FocusTimePropertiesSchema = z.object({
  autoDeclineMode: z.string(),
  declineMessage: z.string(),
  chatStatus: z.string(),
});
export type FocusTimeProperties = z.infer<typeof FocusTimePropertiesSchema>;

const AttachmentSchema = z.object({
  fileUrl: z.string(),
  title: z.string(),
  mimeType: z.string(),
  iconLink: z.string(),
  fileId: z.string(),
});
export type Attachment = z.infer<typeof AttachmentSchema>;

const EventSchema = z.object({
  kind: z.string(),
  etag: z.string(),
  id: z.string(),
  status: z.string(),
  htmlLink: z.string(),
  created: z.string().datetime(),
  updated: z.string().datetime(),
  summary: z.string(),
  description: z.string().optional(),
  location: z.string().optional(),
  colorId: z.string().optional(),
  creator: CreatorSchema,
  organizer: OrganizerSchema,
  start: StartSchema,
  end: EndSchema,
  endTimeUnspecified: z.boolean().optional(),
  recurrence: z.array(z.string()).optional(),
  recurringEventId: z.string().optional(),
  originalStartTime: OriginalStartTimeSchema.optional(),
  transparency: z.string().optional(),
  visibility: z.string().optional(),
  iCalUID: z.string(),
  sequence: z.number().int(),
  attendees: z.array(AttendeeSchema).optional(),
  attendeesOmitted: z.boolean().optional(),
  extendedProperties: ExtendedPropertiesSchema.optional(),
  hangoutLink: z.string().optional(),
  conferenceData: ConferenceDataSchema.optional(),
  gadget: GadgetSchema.optional(),
  anyoneCanAddSelf: z.boolean().optional(),
  guestsCanInviteOthers: z.boolean().optional(),
  guestsCanModify: z.boolean().optional(),
  guestsCanSeeOtherGuests: z.boolean().optional(),
  privateCopy: z.boolean().optional(),
  locked: z.boolean().optional(),
  reminders: RemindersSchema.optional(),
  source: SourceSchema.optional(),
  workingLocationProperties: WorkingLocationPropertiesSchema.optional(),
  outOfOfficeProperties: OutOfOfficePropertiesSchema.optional(),
  focusTimeProperties: FocusTimePropertiesSchema.optional(),
  attachments: z.array(AttachmentSchema).optional(),
  eventType: z.string(),
});
export type Event = z.infer<typeof EventSchema>;

export const EventsResponseSchema = z.object({
  kind: z.string(),
  etag: z.string(),
  summary: z.string(),
  description: z.string(),
  updated: z.coerce.date(),
  timeZone: z.string(),
  accessRole: z.string(),
  defaultReminders: z.array(DefaultReminderSchema),
  nextPageToken: z.string().optional(),
  nextSyncToken: z.string().optional(),
  items: z.array(EventSchema),
});
export type EventsResponse = z.infer<typeof EventsResponseSchema>;
