import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
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
          <Flex className="items-center gap-4">
            <ExclamationTriangleIcon />
            <Md url="public/feedback.mdx" />
          </Flex>
        </Container>
      </Flex>

      <Separator className="w-full" />
    </>
  );
}
