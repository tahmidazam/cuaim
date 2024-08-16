import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";

/**
 * The properties for the `PageTitle` component.
 */
export interface PageTitleProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

/**
 * A header with a title, optional subtitle and optional toolbar.
 * @param param0 The primary and secondary title text.
 */
export default function PageHeader({
  title,
  subtitle,
  children,
}: PageTitleProps) {
  return (
    <Section>
      <Container size="1" className="px-2">
        <Flex className="flex-col gap-8">
          <Flex className="flex-col justify-center gap-2">
            <Heading className="text-center">{title}</Heading>

            {subtitle && <Text className="text-center">{subtitle}</Text>}
          </Flex>

          {children && children}
        </Flex>
      </Container>
    </Section>
  );
}
