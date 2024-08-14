import { z } from "zod";

export const joinMailingListFormSchema = z.object({
  email: z.string().email(),
});

export type JoinMailingListFormSchema = z.infer<
  typeof joinMailingListFormSchema
>;

export const initialJoinMailingListFormSchema: JoinMailingListFormSchema = {
  email: "",
};
