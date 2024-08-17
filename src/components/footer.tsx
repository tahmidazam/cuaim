import { contactLabelledHrefs } from "@/constants/contact-labelled-hrefs";
import { tabs } from "@/constants/tabs";
import { LabelledHref } from "@/interfaces/labelled-href";
import { Container, Flex, Link as RadixLink, Text } from "@radix-ui/themes";
import Link from "next/link";
import Md from "./md";

/**
 * The website footer.
 */
export default function Footer() {
  return (
    <Flex className=" bg-[var(--gray-2)]">
      <Container>
        <Flex className="flex-col p-4 gap-8">
          <Flex className="gap-24 flex-wrap">
            <Flex className="flex-col gap-2">
              <Text>Sitemap</Text>

              <Flex className="flex-col">
                {tabs.map(({ href, label }: LabelledHref, index: number) => (
                  <RadixLink key={index} asChild size="2">
                    <Link href={href}>{label}</Link>
                  </RadixLink>
                ))}
              </Flex>
            </Flex>

            <Flex className="flex-col gap-2">
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
          </Flex>

          <Md filename="credits" textColour="gray" textSize="1" />
        </Flex>
      </Container>
    </Flex>
  );
}
