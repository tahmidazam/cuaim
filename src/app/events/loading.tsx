import { Flex, Spinner, Text } from "@radix-ui/themes";

export default function EventsLoading() {
  return (
    <Flex className="justify-center items-center flex-grow gap-2">
      <Spinner />
      <Text size="2" color="gray">
        Loading events...
      </Text>
    </Flex>
  );
}
