import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import BlurEntry from "./blur-entry";

/** The props for the `Hero` component. */
export interface HeroProps {
  primary: string;
  secondary: string;
  children?: React.ReactNode;
}

/**
 * A repsonsive hero section.
 *
 * Aligns right on initial breakpoint and center on `sm` and above.
 * @param param0 The primary, secondary text, and children to render below.
 */
export default function Hero({ primary, secondary, children }: HeroProps) {
  return (
    <Section className="py-0">
      <Container size="4" className="px-4">
        <Flex
          className="flex-col gap-8 sm:gap-16 items-center justify-center"
          style={{
            height: "calc(100vh - 88px)",
          }}
          align={{
            initial: "start",
            sm: "center",
          }}
        >
          <Flex
            className="flex-col gap-2 sm:gap-4"
            align={{
              initial: "start",
              sm: "center",
            }}
          >
            <BlurEntry>
              <Text
                size={{
                  initial: "4",
                  sm: "6",
                }}
                align={{
                  initial: "left",
                  sm: "center",
                }}
                wrap="balance"
              >
                {secondary}
              </Text>
            </BlurEntry>

            <BlurEntry delayIndex={1}>
              <Heading
                size={{
                  initial: "8",
                  sm: "9",
                }}
                align={{
                  initial: "left",
                  sm: "center",
                }}
              >
                {primary}
              </Heading>
            </BlurEntry>
          </Flex>

          {children && children}
        </Flex>
      </Container>
    </Section>
  );
}
