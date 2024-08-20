import { Flex, Text } from "@radix-ui/themes";

/**
 * The props for the `FooterSection` component.
 */
export interface FooterSectionProps {
  title: string;
  children?: React.ReactNode;
}

/**
 * A labelled section in the footer.
 * @param param0 The title and children of the section.
 */
export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <Flex className="flex-col gap-2 flex-grow">
      <Text>{title}</Text>

      {children && <Flex className="flex-col items-start">{children}</Flex>}
    </Flex>
  );
}
