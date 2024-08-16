import { Container, Flex, Separator } from "@radix-ui/themes";
import Md from "./md";

/**
 * An under construction banner requesting feedback.
 */
export default function UnderConstructionBanner() {
  return (
    <>
      <Flex className="bg-[var(--pink-2)] p-2">
        <Container>
          <Flex className="items-center gap-4 max-w-[100dvw]">
            <Md filename="feedback" textSize="1" />
          </Flex>
        </Container>
      </Flex>

      <Separator className="w-full" />
    </>
  );
}
