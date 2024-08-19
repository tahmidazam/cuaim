import { SOCIAL_ICON_MAP } from "@/constants/social-icon-map";
import { LabelledHref } from "@/interfaces/labelled-href";
import { IconButton, Link as RadixLink } from "@radix-ui/themes";
import Link from "next/link";

/**
 * An icon button or link to a contact method.
 *
 * The label of the labelled hypertext reference will form the key to the social
 * icon. If a social icon exists in the social icon map for a given label, it
 * will be displayed as an icon button.
 * @param param0 The labelled hypertext reference.
 */
export default function ContactLink({ href, label }: LabelledHref) {
  const key = label.toLowerCase();
  const Icon = SOCIAL_ICON_MAP[key as keyof typeof SOCIAL_ICON_MAP];

  if (!Icon)
    return (
      <RadixLink asChild>
        <Link href={href}>{label}</Link>
      </RadixLink>
    );

  return (
    <IconButton asChild variant="soft" size="1">
      <Link href={href}>
        <Icon />
      </Link>
    </IconButton>
  );
}
