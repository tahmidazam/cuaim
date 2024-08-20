import CommitteeMemberCell from "@/components/committee-member-cell";
import PageHeader from "@/components/page-header";
import {
  ARZINA_ISMAILI,
  HARSHVIR_GREWAL,
  JUSTINE_CHAN,
  KESHAV_KEDIA,
  NEIL_SARDESAI,
  SHARON_HO,
  TAHMID_AZAM,
  ZOYA_YASMINE,
} from "@/constants/committee-members";
import { Container, Grid, Section } from "@radix-ui/themes";
import KESHAV_KEDIA_PFP from "../../../public/images/committee/keshavkedia.jpeg";
import ZOYA_YASMINE_PFP from "../../../public/images/committee/zoyayasmine.jpeg";

/**
 * A page that lists the committee members.
 */
export default function CommitteePage() {
  return (
    <>
      <PageHeader title="Committee" subtitle="Get to know your 2024 members." />

      <Section>
        <Container>
          <Grid
            columns={{
              initial: "1",
              md: "2",
            }}
          >
            <CommitteeMemberCell {...NEIL_SARDESAI} />
            <CommitteeMemberCell {...JUSTINE_CHAN} />
            <CommitteeMemberCell {...SHARON_HO} />
            <CommitteeMemberCell {...ZOYA_YASMINE} pfp={ZOYA_YASMINE_PFP} />
            <CommitteeMemberCell {...ARZINA_ISMAILI} />
            <CommitteeMemberCell {...HARSHVIR_GREWAL} />
            <CommitteeMemberCell {...KESHAV_KEDIA} pfp={KESHAV_KEDIA_PFP} />
            <CommitteeMemberCell {...TAHMID_AZAM} />
          </Grid>
        </Container>
      </Section>
    </>
  );
}
