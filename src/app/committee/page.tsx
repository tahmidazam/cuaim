import CommitteeMemberCell from "@/components/committee-member-cell";
import PageHeader from "@/components/page-header";
import {
  ARZINA_ISMAILI,
  BHARATH_SIVASRITHARAN,
  HARSHVIR_GREWAL,
  JUSTINE_CHAN,
  KESHAV_KEDIA,
  NEIL_SARDESAI,
  SHARON_HO,
  TAHMID_AZAM,
  ZOYA_YASMINE,
} from "@/constants/committee-members";
import { Container, Grid, Section } from "@radix-ui/themes";
import HARSHVIR_GREWAL_PFP from "../../../public/images/committee/harshvirgrewal.jpeg";
import KESHAV_KEDIA_PFP from "../../../public/images/committee/keshavkedia.jpeg";
import NEIL_SARDESAI_PFP from "../../../public/images/committee/neilsardesai.jpeg";
import SHARON_HO_PFP from "../../../public/images/committee/sharonho.jpeg";
import TAHMID_AZAM_PFP from "../../../public/images/committee/tahmidazam.jpeg";
import ZOYA_YASMINE_PFP from "../../../public/images/committee/zoyayasmine.jpeg";
import BHARATH_SIVASRITHARAN_PFP from "../../../public/images/committee/bharathsivasritharan.jpeg";
import JUSTINE_CHAN_PFP from "../../../public/images/committee/justinechan.jpeg";
import ARZINA_ISMAILI_PFP from "../../../public/images/committee/arzinaismaili.jpeg";

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
              sm: "2",
              md: "3",
            }}
          >
            <CommitteeMemberCell {...NEIL_SARDESAI} pfp={NEIL_SARDESAI_PFP} />
            <CommitteeMemberCell {...JUSTINE_CHAN} pfp={JUSTINE_CHAN_PFP} />
            <CommitteeMemberCell {...SHARON_HO} pfp={SHARON_HO_PFP} />
            <CommitteeMemberCell {...ZOYA_YASMINE} pfp={ZOYA_YASMINE_PFP} />
            <CommitteeMemberCell {...ARZINA_ISMAILI} pfp={ARZINA_ISMAILI_PFP} />
            <CommitteeMemberCell
              {...HARSHVIR_GREWAL}
              pfp={HARSHVIR_GREWAL_PFP}
            />
            <CommitteeMemberCell {...KESHAV_KEDIA} pfp={KESHAV_KEDIA_PFP} />
            <CommitteeMemberCell {...TAHMID_AZAM} pfp={TAHMID_AZAM_PFP} />
            <CommitteeMemberCell
              {...BHARATH_SIVASRITHARAN}
              pfp={BHARATH_SIVASRITHARAN_PFP}
            />
          </Grid>
        </Container>
      </Section>
    </>
  );
}
