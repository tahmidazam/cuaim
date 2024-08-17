import { CommitteeMember } from "@/interfaces/committee-member";
import { ContactLabelledHref } from "@/interfaces/contact-labelled-href";
import { Flex, Text } from "@radix-ui/themes";
import ContactLink from "./contact-link";
import Md from "./md";

/**
 * The props for the `CommitteeMemberCell` component.
 */
export interface CommitteeMemberCellProps extends CommitteeMember {
  children?: React.ReactNode;
}

/**
 * A grid cell that displays a committee member's details.
 * @param param0 The committee member to display, and an image as the children.
 */
export default function CommitteeMemberCell({
  name,
  role,
  headline,
  bio,
  contact,
}: CommitteeMemberCellProps) {
  return (
    <Flex className="flex-col gap-2">
      <Flex className="flex-col">
        <Text weight="bold">{name}</Text>

        <Text color="gray" size="2">
          {[role, headline].filter(Boolean).join(" · ")}
        </Text>
      </Flex>

      {contact && (
        <Flex className="gap-2 flex-wrap">
          {contact.map(
            (contactLabelledHref: ContactLabelledHref, index: number) => (
              <ContactLink key={index} {...contactLabelledHref} />
            )
          )}
        </Flex>
      )}

      <Md source={bio} textSize="2" />
    </Flex>
  );
}
