import CommitteeMemberCell from "@/components/committee-member-cell";
import PageHeader from "@/components/page-header";
import { committeeMembers } from "@/constants/committee-members";
import { CommitteeMember } from "@/interfaces/committee-member";
import { Container, Grid, Section } from "@radix-ui/themes";

/**
 * A page that lists the committee members.
 */
export default function CommitteePage() {
  return (
    <>
      <PageHeader title="Committee" subtitle="Get to know your 2024 members." />

      <Section>
        <Container className="px-4">
          <Grid
            columns={{
              initial: "1",
              sm: "2",
              md: "4",
            }}
            className="gap-4 auto-rows-fr"
          >
            {committeeMembers.map(
              (committeeMember: CommitteeMember, index: number) => (
                <CommitteeMemberCell key={index} {...committeeMember} />
              )
            )}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
