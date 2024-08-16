import { Event } from "@/schemas/events-response";
import { Table, Text } from "@radix-ui/themes";
import EventTableRow from "./event-table-row";

/**
 * The props for the `EventGrid` component.
 */
interface EventGridProps {
  label: string;
  events: Event[];
}

/**
 * Displays a grid of events.
 * @param param0 The label and array of events.
 */
export default function EventTable({ label, events }: EventGridProps) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>{label}</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {events.length === 0 && (
          <Table.Row>
            <Table.Cell>
              <Text color="gray">No events</Text>
            </Table.Cell>
          </Table.Row>
        )}

        {events.map((event: Event) => (
          <EventTableRow key={event.id} event={event} />
        ))}
      </Table.Body>
    </Table.Root>
  );
}
