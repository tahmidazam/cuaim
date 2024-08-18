import Md from "@/components/md";
import { Container, Section } from "@radix-ui/themes";

export default function AboutPage() {
  return (
    <Section>
      <Container size="1" className="px-4">
        <Md filename="about" />
      </Container>
    </Section>
  );
}
