import { contactLabelledHrefs } from "@/constants/contact-labelled-hrefs";
import { tabs } from "@/constants/tabs";
import { LabelledHref } from "@/interfaces/labelled-href";
import {
  Button,
  Container,
  Dialog,
  Flex,
  Link as RadixLink,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import Md from "./md";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import AnalyticsInfoDialog from "./analytics-info-dialog";

/**
 * The website footer.
 */
export default function Footer() {
  return (
    <Section className="bg-[var(--gray-2)]" py="0">
      <Container>
        <Flex className="flex-col p-4 gap-8">
          <Flex className="gap-8 flex-wrap">
            <Flex className="flex-col gap-2 flex-grow">
              <Text>Sitemap</Text>

              <Flex className="flex-col ">
                {tabs.map(({ href, label }: LabelledHref, index: number) => (
                  <RadixLink key={index} asChild size="2">
                    <Link href={href}>{label}</Link>
                  </RadixLink>
                ))}
              </Flex>
            </Flex>

            <Flex className="flex-col gap-2 flex-grow">
              <Text>Contact</Text>

              <Flex className="flex-col">
                {contactLabelledHrefs.map(
                  ({ href, label }: LabelledHref, index: number) => (
                    <RadixLink key={index} asChild size="2">
                      <Link href={href}>{label}</Link>
                    </RadixLink>
                  )
                )}
              </Flex>
            </Flex>

            <Flex className="flex-col gap-2 flex-grow">
              <Text>Docs</Text>

              <Flex className="flex-col">
                <AnalyticsInfoDialog />
              </Flex>
            </Flex>
          </Flex>

          <Md filename="credits" textColour="gray" textSize="1" />
        </Flex>
      </Container>
    </Section>
  );
}
