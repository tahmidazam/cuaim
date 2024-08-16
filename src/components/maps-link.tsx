import { mappingProviders } from "@/constants/mapping-providers";
import { LabelledHref } from "@/interfaces/labelled-href";
import { DropdownMenu, Link as RadixLink } from "@radix-ui/themes";
import Link from "next/link";

/**
 * A link with options to open the location with a dropdown menu of mapping
 * providers.
 * @param param0 The location to link to.
 */
export default function MapsLink({ location }: { location?: string }) {
  // If there is no location, return null.
  if (!location) return null;

  // Encode the location for use in a URL.
  const encodedLocation: string = encodeURIComponent(location);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <RadixLink href="#">{location}</RadixLink>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        {mappingProviders.map(
          ({ label, href: baseUrl }: LabelledHref, index: number) => (
            <DropdownMenu.Item asChild key={index}>
              <Link href={`${baseUrl}${encodedLocation}`}>{label}</Link>
            </DropdownMenu.Item>
          )
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
