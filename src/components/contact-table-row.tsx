import { ContactLabelledHref } from "@/interfaces/contact-labelled-href";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Flex, Table, Text } from "@radix-ui/themes";
import Link from "next/link";

/**
 * A table row for a contact link.
 * @param param0 The contact labelled hypertext reference.
 */
export default function ContactTableRow({
  href,
  label,
  handle,
}: ContactLabelledHref) {
  return (
    <Table.Row className="hover:bg-[var(--gray-2)]">
      <Table.Cell>
        <Link href={href}>
          <Flex className="justify-between items-center">
            <Flex className="flex-col">
              <Text>{label}</Text>
              <Text color="gray">{handle}</Text>
            </Flex>

            <ExternalLinkIcon color="gray" />
          </Flex>
        </Link>
      </Table.Cell>
    </Table.Row>
  );
}
