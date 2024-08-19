import {
  EVENT_STATUS_COLOR_MAP,
  EVENT_STATUS_ICON_MAP,
  EVENT_STATUS_LABEL_MAP,
} from "@/constants/status-maps";
import { Badge } from "@radix-ui/themes";

/**
 * A badge to display the status of an event.
 * @param param0 The status of the event.
 */
export default function EventStatusBadge({ status }: { status: string }) {
  const Icon =
    EVENT_STATUS_ICON_MAP[status as keyof typeof EVENT_STATUS_ICON_MAP];
  const color =
    EVENT_STATUS_COLOR_MAP[status as keyof typeof EVENT_STATUS_COLOR_MAP];
  const label =
    EVENT_STATUS_LABEL_MAP[status as keyof typeof EVENT_STATUS_LABEL_MAP];

  if (!Icon || !color || !label) return null;

  return (
    <Badge variant="surface" color={color} radius="full">
      <Icon /> {label}
    </Badge>
  );
}
