"use client";

import { BASE_URL, LIST_NAME } from "@/constants/join-mailing-list";
import {
  initialJoinMailingListFormSchema,
  joinMailingListFormSchema,
  JoinMailingListFormSchema,
} from "@/schemas/join-mailing-list";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import { usePostHog } from "posthog-js/react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

/**
 * The form to join the CU AIM's mailing list on sympa, with validation and
 * redirection.
 * @returns The form to join the mailing list.
 */
export default function JoinMailingListForm() {
  const posthog = usePostHog();
  const [formState, setFormState] = useState<JoinMailingListFormSchema>(
    initialJoinMailingListFormSchema
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ email: event.target.value });
  };

  const onClick = () => {
    // Run validation on the form state.
    const result = joinMailingListFormSchema.safeParse(formState);

    // If the validation fails, display an error toast and return early.
    if (!result.success) {
      // Construct a user-readable message from the validation issues.
      const message: string = result.error.issues
        .map((issue: z.ZodIssue) => issue.message)
        .join(", ");

      toast.error(message);

      return;
    }

    const { email } = result.data;

    // Encode the email address for the URL.
    const encodedEmail: string = encodeURIComponent(email);

    // Construct the URL to redirect the user to sympa.
    const url: string = `${BASE_URL}/${LIST_NAME}?email=${encodedEmail}`;

    // Display a success toast.
    toast.success("Taking you to sympla...");

    // Capture the event for analytics.
    posthog.capture("user_joined_mailing_list");

    // Redirect the user to the constructed URL.
    window.location.href = url;
  };

  return (
    <>
      <TextField.Root
        placeholder="example@domain.com"
        onChange={onChange}
        value={formState.email}
      >
        <TextField.Slot>
          <EnvelopeClosedIcon color="gray" />
        </TextField.Slot>
      </TextField.Root>

      <Button onClick={onClick}>Join mailing list</Button>
    </>
  );
}
