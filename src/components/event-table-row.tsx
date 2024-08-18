import { Event } from "@/schemas/events-response";
import generateMapEmbedUrl from "@/utils/generateMapEmbedUrl";
import { Button, Dialog, Flex, Table } from "@radix-ui/themes";
import EventDataList from "./event-data-list";
import MapEmbed from "./map-embed";

/**
 *  A table row for an event.
 * @param param0 The event to display.
 */
export default function EventTableRow({ event }: { event: Event }) {
  const mapEmbedUrl = event.location && generateMapEmbedUrl(event.location, 18);

  return (
    <Table.Row key={event.id} className="hover:bg-[var(--gray-2)]">
      <Table.Cell>
        <Dialog.Root>
          <Dialog.Trigger>
            <EventDataList
              event={event}
              hiddenKeys={["attachments", "status", "created", "updated"]}
            />
          </Dialog.Trigger>

          <Dialog.Content aria-describedby={event.description}>
            <Flex className="flex-col items-start gap-8">
              {process.env.GOOGLE_CLOUD_API_KEY && mapEmbedUrl && (
                <MapEmbed src={mapEmbedUrl} />
              )}

              <EventDataList event={event} />

              <Flex className="justify-end w-full">
                <Dialog.Close>
                  <Button>Done</Button>
                </Dialog.Close>
              </Flex>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Table.Cell>
    </Table.Row>
  );
}
