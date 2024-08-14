import { z } from "zod";

export const JoinMailingListFormSchema = z.object({
  email: z.string().email(),
});

export type JoinMailingListFormSchema = z.infer<
  typeof JoinMailingListFormSchema
>;

export const initialJoinMailingListFormSchema: JoinMailingListFormSchema = {
  email: "",
};
