import { Flex, Separator } from "@radix-ui/themes";
import Md from "./md";

/**
 * An under construction banner requesting feedback.
 */
export default function UnderConstructionBanner() {
  return (
    <>
      <Flex className="bg-[var(--pink-2)] p-2 justify-center">
        <Md filename="feedback" textSize="1" />
      </Flex>

      <Separator className="w-full" />
    </>
  );
}
