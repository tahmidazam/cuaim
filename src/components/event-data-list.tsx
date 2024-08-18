import { Attachment, Event } from "@/schemas/events-response";
import generateTiming from "@/utils/generateTiming";
import { Badge, DataList, Flex, Link as RadixLink } from "@radix-ui/themes";
import { format } from "date-fns";
import Link from "next/link";
import EventStatusBadge from "./event-status-badge";
import MapsLink from "./maps-link";
import Md from "./md";

const eventDataListKeys = [
  "summary",
  "timing",
  "location",
  "description",
  "attachments",
  "status",
  "created",
  "creator",
  "updated",
] as const;
export type EventDataListKey = (typeof eventDataListKeys)[number];

/**
 * The props for the `EventDataList` component.
 */
export interface EventDataListProps {
  event: Event;
  hiddenKeys?: EventDataListKey[];
}

/**
 * A list of all data for an event.
 * @param param0 The event and optional keys to hide from the list.
 */
export default function EventDataList({
  event,
  hiddenKeys,
}: EventDataListProps) {
  const timing: string = generateTiming(
    event.start.dateTime,
    event.end.dateTime
  );

  return (
    <DataList.Root
      orientation={{
        initial: "vertical",
        sm: "horizontal",
      }}
    >
      {!hiddenKeys?.includes("summary") && (
        <DataList.Item>
          <DataList.Label>Summary</DataList.Label>
          <DataList.Value>{event.summary}</DataList.Value>
        </DataList.Item>
      )}

      {!hiddenKeys?.includes("timing") && (
        <DataList.Item>
          <DataList.Label>Timing</DataList.Label>
          <DataList.Value>{timing}</DataList.Value>
        </DataList.Item>
      )}

      {!hiddenKeys?.includes("location") && event.location && (
        <DataList.Item>
          <DataList.Label>Location</DataList.Label>
          <DataList.Value>
            <MapsLink location={event.location} />
          </DataList.Value>
        </DataList.Item>
      )}

      {!hiddenKeys?.includes("description") && event.description && (
        <DataList.Item>
          <DataList.Label>Description</DataList.Label>
          <DataList.Value>
            <Md html={event.description} />
          </DataList.Value>
        </DataList.Item>
      )}

      {!hiddenKeys?.includes("attachments") &&
        event.attachments &&
        event.attachments.length > 0 && (
          <DataList.Item>
            <DataList.Label>Attachments</DataList.Label>

            <DataList.Value>
              <Flex className="w-full flex-wrap">
                {event.attachments?.map((attachment: Attachment) => (
                  <Badge
                    radius="full"
                    variant="surface"
                    asChild
                    key={attachment.fileId}
                  >
                    <Link href={attachment.fileUrl}>{attachment.title}</Link>
                  </Badge>
                ))}
              </Flex>
            </DataList.Value>
          </DataList.Item>
        )}

      {!hiddenKeys?.includes("status") && (
        <DataList.Item>
          <DataList.Label>Status</DataList.Label>
          <DataList.Value>
            <EventStatusBadge status={event.status} />
          </DataList.Value>
        </DataList.Item>
      )}

      {!hiddenKeys?.includes("created") && (
        <DataList.Item>
          <DataList.Label>Created</DataList.Label>
          <DataList.Value>
            {format(event.created, "d MMM yy, HH:mm")}
          </DataList.Value>
        </DataList.Item>
      )}

      {!hiddenKeys?.includes("creator") &&
        (event.creator.displayName || event.creator.email) && (
          <DataList.Item>
            <DataList.Label>Creator</DataList.Label>
            <DataList.Value>
              <RadixLink asChild>
                <Link href={`mailto:${event.creator.email}`}>
                  {event.creator.displayName ?? event.creator.email}
                </Link>
              </RadixLink>
            </DataList.Value>
          </DataList.Item>
        )}

      {!hiddenKeys?.includes("updated") && (
        <DataList.Item>
          <DataList.Label>Updated</DataList.Label>
          <DataList.Value>
            {format(event.updated, "d MMM yy, HH:mm")}
          </DataList.Value>
        </DataList.Item>
      )}
    </DataList.Root>
  );
}
