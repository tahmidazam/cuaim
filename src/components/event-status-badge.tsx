import {
  eventStatusColorMap,
  eventStatusIconMap,
  eventStatusLabelMap,
} from "@/constants/status-maps";
import { Badge } from "@radix-ui/themes";

/**
 * A badge to display the status of an event.
 * @param param0 The status of the event.
 */
export default function EventStatusBadge({ status }: { status: string }) {
  const Icon = eventStatusIconMap[status as keyof typeof eventStatusIconMap];
  const color = eventStatusColorMap[status as keyof typeof eventStatusColorMap];
  const label = eventStatusLabelMap[status as keyof typeof eventStatusLabelMap];

  if (!Icon || !color || !label) return null;

  return (
    <Badge variant="surface" color={color} radius="full">
      <Icon /> {label}
    </Badge>
  );
}
