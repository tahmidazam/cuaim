import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import Md from "./md";

/**
 * A dialog to explain cookieless web analytics.
 */
export default function AnalyticsInfoDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Text size="2" color="gray">
          A note on cookieless web analytics
        </Text>
      </Dialog.Trigger>

      <Dialog.Content aria-describedby={undefined}>
        <Dialog.Title>Cookieless web analytics</Dialog.Title>
        <Dialog.Description color="gray">
          How we track engagement, without tracking <em>you</em>
        </Dialog.Description>

        <Flex className="flex-col mt-8 gap-8">
          <Md filename="cookieless-tracking" textSize="2" />

          <Flex className="justify-end">
            <Dialog.Close>
              <Button>Done</Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
