import JoinMailingListForm from "@/components/join-mailing-list-form";
import Md from "@/components/md";
import {
  Container,
  Flex,
  Heading,
  Section,
  Separator,
  Spinner,
  Text,
} from "@radix-ui/themes";
import { Suspense } from "react";

/**
 * A page to join the mailing list.
 */
export default async function JoinPage() {
  return (
    <Section>
      <Container size="1" className="px-2">
        <Flex direction="column" className="gap-8">
          <Flex direction="column" className="gap-2">
            <Heading>Join the mailing list</Heading>
            <Text>Get lecture and event updates straight to your inbox.</Text>
          </Flex>

          <JoinMailingListForm />

          <Separator className="w-full" />

          <Suspense fallback={<Spinner />}>
            <Md filename="join" textSize="1" textColour="gray" />
          </Suspense>
        </Flex>
      </Container>
    </Section>
  );
}
