"use client";

import {
  LIST_NAME,
  MAILING_LIST_BASE_URL,
} from "@/constants/join-mailing-list";
import {
  initialJoinMailingListFormSchema,
  JoinMailingListFormSchema,
} from "@/schemas/join-mailing-list";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { usePostHog } from "posthog-js/react";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

/**
 * The form to join the CU AIM's mailing list on sympa, the University's mailing
 * list service, with validation and redirection.
 * @returns The form to join the mailing list.
 */
export default function JoinMailingListForm() {
  const posthog = usePostHog();
  const [formState, setFormState] = useState<JoinMailingListFormSchema>(
    initialJoinMailingListFormSchema
  );

  const onChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setFormState({ email: event.target.value });
  };

  const onClick = () => {
    // Run validation on the form state.
    const result = JoinMailingListFormSchema.safeParse(formState);

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
    const url: string = `${MAILING_LIST_BASE_URL}/${LIST_NAME}?email=${encodedEmail}`;

    // Display a success toast.
    toast.success("Taking you to sympla...");

    // Capture the event for analytics.
    posthog.capture("user_joined_mailing_list");

    // Redirect the user to the constructed URL.
    window.location.href = url;
  };

  return (
    <Flex direction="row" className="gap-4">
      <TextField.Root
        placeholder="example@domain.com"
        type="email"
        onChange={onChange}
        value={formState.email}
        className="flex-grow"
      >
        <TextField.Slot>
          <EnvelopeClosedIcon color="gray" />
        </TextField.Slot>
      </TextField.Root>

      <Button className="flex-grow-0" onClick={onClick}>
        Continue
      </Button>
    </Flex>
  );
}
