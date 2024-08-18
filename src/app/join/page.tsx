import JoinMailingListForm from "@/components/join-mailing-list-form";
import Md from "@/components/md";
import PageHeader from "@/components/page-header";
import { Container, Flex, Section, Separator } from "@radix-ui/themes";

/**
 * A page to join the mailing list.
 */
export default async function JoinPage() {
  return (
    <>
      <PageHeader
        title="Join the mailing list"
        subtitle="All the updates straight to your inbox."
      />

      <Section>
        <Container size="1" className="px-4">
          <Flex className="flex-col gap-8">
            <JoinMailingListForm />

            <Separator className="w-full" />

            <Md filename="join" textSize="1" textColour="gray" />
          </Flex>
        </Container>
      </Section>
    </>
  );
}
