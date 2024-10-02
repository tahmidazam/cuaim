import { ContactLabelledHref } from "@/interfaces/contact-labelled-href";
import { Sponsor } from "@/interfaces/sponsor";
import { Flex, Text } from "@radix-ui/themes";
import ContactLink from "./contact-link";
import Image, { StaticImageData } from "next/image";

export default function SponsorCell({
  sponsor,
  logo,
}: {
  sponsor: Sponsor;
  logo?: StaticImageData;
}) {
  return (
    <Flex direction="column" className="flex-col w-full h-full gap-4">
      {logo && (
        <Image src={logo} alt={sponsor.name} className="max-w-40 mx-auto" />
      )}

      <Flex className="flex-col gap-2">
        <Flex className="flex-col">
          <Text size="2" className="uppercase">
            {sponsor.tier}
          </Text>
          <Text weight="bold">{sponsor.name}</Text>
        </Flex>

        <Text>{sponsor.description}</Text>
        {sponsor.contact && (
          <Flex className="gap-2 flex-wrap">
            {sponsor.contact.map(
              (contactLabelledHref: ContactLabelledHref, index: number) => (
                <ContactLink key={index} {...contactLabelledHref} />
              )
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
