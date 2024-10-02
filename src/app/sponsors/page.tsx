import Md from "@/components/md";
import SponsorCell from "@/components/sponsor-cell";
import { APTA, ORZONE, UNIVERSITY_OF_CAMBRIDGE } from "@/constants/sponsors";
import { Container, Flex, Grid, Section } from "@radix-ui/themes";
import APTA_LOGO from "../../../public/images/sponsors/apta.jpeg";
import ORZONE_LOGO from "../../../public/images/sponsors/orzone.jpeg";
import UNIVERSITY_OF_CAMBRIDGE_LOGO from "../../../public/images/sponsors/universityofcambridge.jpeg";

export default function SponsorsPage() {
  return (
    <Section>
      <Container size="1" className="px-4">
        <Flex className="flex-col gap-8">
          <SponsorCell sponsor={ORZONE} logo={ORZONE_LOGO} />

          <SponsorCell sponsor={APTA} logo={APTA_LOGO} />

          <SponsorCell
            sponsor={UNIVERSITY_OF_CAMBRIDGE}
            logo={UNIVERSITY_OF_CAMBRIDGE_LOGO}
          />

          <Md textSize="2" textColour="gray" filename="sponsors" />
        </Flex>
      </Container>
    </Section>
  );
}
