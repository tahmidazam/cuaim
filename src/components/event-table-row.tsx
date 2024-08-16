import { Event } from "@/schemas/events-response";
import { DataList, Flex, Table, Text } from "@radix-ui/themes";
import { format } from "date-fns";
import MapsLink from "./maps-link";
import Md from "./md";

/**
 *  A table row for an event.
 *
 * Assumptions:
 * - There is a start and end time on the event
 * - Events are not all day
 * - The event start and end are on the same day
 *
 * @param param0 The event to display.
 */
export default function EventTableRow({ event }: { event: Event }) {
  const timing: string = `${format(event.start.dateTime, "HH:mm")}–${format(
    event.end.dateTime,
    "HH:mm"
  )}, ${format(event.start.dateTime, "d MMM yy")}`;

  return (
    <Table.Row key={event.id}>
      <Table.Cell>
        <Flex className="flex-col gap-4">
          <Flex className="flex-col">
            <Text>{event.summary}</Text>

            <Text>{timing}</Text>
          </Flex>

          {(event.location || event.description) && (
            <DataList.Root>
              {event.location && (
                <DataList.Item>
                  <DataList.Label>Location</DataList.Label>
                  <DataList.Value>
                    <MapsLink location={event.location} />
                  </DataList.Value>
                </DataList.Item>
              )}

              {event.description && (
                <DataList.Item>
                  <DataList.Label>Description</DataList.Label>
                  <DataList.Value>
                    <Md html={event.description} />
                  </DataList.Value>
                </DataList.Item>
              )}
            </DataList.Root>
          )}
        </Flex>
      </Table.Cell>
    </Table.Row>
  );
}
