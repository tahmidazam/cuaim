import { CommitteeMember } from "@/interfaces/committee-member";
import { ContactLabelledHref } from "@/interfaces/contact-labelled-href";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import ContactLink from "./contact-link";
import Md from "./md";

/**
 * The props for the `CommitteeMemberCell` component.
 */
export interface CommitteeMemberCellProps extends CommitteeMember {
  pfp?: StaticImageData;
}

/**
 * A grid cell that displays a committee member's details.
 * @param param0 The committee member to display along with a profile picture.
 */
export default function CommitteeMemberCell({
  name,
  role,
  headline,
  bio,
  contact,
  pfp,
}: CommitteeMemberCellProps) {
  return (
    <Flex className="gap-4 hover:bg-[var(--gray-2)] w-full h-full p-4">
      {pfp ? (
        <Image src={pfp} alt={name} className="max-w-40" />
      ) : (
        <Box className="bg-[var(--gray-3)] w-full max-w-40 h-40 flex-shrink-0"></Box>
      )}

      <Flex className="flex-col gap-4">
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
        </Flex>

        <Md source={bio} textSize="2" />
      </Flex>
    </Flex>
  );
}
