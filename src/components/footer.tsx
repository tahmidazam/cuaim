import { COMMITTEE_MEMBERS } from "@/constants/committee-members";
import { CONTACT_LABELLED_HREFS } from "@/constants/contact-labelled-hrefs";
import { TABS } from "@/constants/tabs";
import { CommitteeMember } from "@/interfaces/committee-member";
import { LabelledHref } from "@/interfaces/labelled-href";
import { Container, Flex, Link as RadixLink, Section } from "@radix-ui/themes";
import Link from "next/link";
import AnalyticsInfoDialog from "./analytics-info-dialog";
import FooterSection from "./footer-section";
import Md from "./md";
import ThemeSegmentedControl from "./theme-segmented-control";

/**
 * The website footer.
 */
export default function Footer() {
  return (
    <Section className="bg-[var(--gray-2)]" py="0">
      <Container>
        <Flex className="flex-col p-4 gap-8 items-start">
          <Flex className="justify-end w-full md:hidden">
            <ThemeSegmentedControl size="1" radius="full" />
          </Flex>

          <Flex className="gap-16 flex-wrap">
            <FooterSection title="Sitemap">
              {TABS.map(({ href, label }: LabelledHref, index: number) => (
                <RadixLink key={index} asChild size="2">
                  <Link href={href}>{label}</Link>
                </RadixLink>
              ))}
            </FooterSection>

            <FooterSection title="Contact">
              {CONTACT_LABELLED_HREFS.map(
                ({ href, label }: LabelledHref, index: number) => (
                  <RadixLink key={index} asChild size="2">
                    <Link href={href}>{label}</Link>
                  </RadixLink>
                )
              )}
            </FooterSection>

            <FooterSection title="Committee">
              {COMMITTEE_MEMBERS.map(
                ({ name }: CommitteeMember, index: number) => (
                  <RadixLink key={index} asChild size="2">
                    <Link href="/committee">{name}</Link>
                  </RadixLink>
                )
              )}
            </FooterSection>

            <FooterSection title="Docs">
              <AnalyticsInfoDialog />
            </FooterSection>
          </Flex>

          <Md filename="credits" textColour="gray" textSize="1" />
        </Flex>
      </Container>
    </Section>
  );
}
