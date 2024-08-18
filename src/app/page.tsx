import BlurEntry from "@/components/blur-entry";
import Hero from "@/components/hero";
import { ArrowRightIcon, UpdateIcon } from "@radix-ui/react-icons";
import { Badge, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero
        primary="Learn, collaborate, and network where AI and medicine intersect"
        secondary="Cambridge University Artifical Intelligence in Medicine Society"
      >
        <Flex
          className="flex-col gap-8 w-full"
          align={{
            initial: "start",
            sm: "center",
          }}
        >
          <Flex
            className="gap-2 flex-wrap"
            align={{
              initial: "start",
              sm: "center",
            }}
          >
            <BlurEntry delayIndex={2}>
              <Button
                asChild
                size={{
                  initial: "2",
                  sm: "4",
                }}
              >
                <Link href="/join">Join mailing list</Link>
              </Button>
            </BlurEntry>

            <BlurEntry delayIndex={3}>
              <Button
                variant="soft"
                size={{
                  initial: "2",
                  sm: "4",
                }}
              >
                <UpdateIcon /> Sync calendar
              </Button>
            </BlurEntry>
          </Flex>

          <BlurEntry delayIndex={4}>
            <Link href="/committee">
              <Badge size="3" radius="full" variant="surface">
                🎉 Meet our 2024 Committee <ArrowRightIcon />
              </Badge>
            </Link>
          </BlurEntry>
        </Flex>
      </Hero>
    </main>
  );
}
