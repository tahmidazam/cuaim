import ContactTableRow from "@/components/contact-table-row";
import PageHeader from "@/components/page-header";
import { contactLabelledHrefs } from "@/constants/contact-labelled-hrefs";
import { ContactLabelledHref } from "@/interfaces/contact-labelled-href";
import { Container, Section, Table } from "@radix-ui/themes";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Get connected on all platforms." />

      <Section>
        <Container size="1" className="px-2">
          <Table.Root>
            <Table.Body>
              {contactLabelledHrefs.map(
                (contactLabelledHref: ContactLabelledHref, index: number) => (
                  <ContactTableRow {...contactLabelledHref} key={index} />
                )
              )}
            </Table.Body>
          </Table.Root>
        </Container>
      </Section>
    </>
  );
}
