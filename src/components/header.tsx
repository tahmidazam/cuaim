"use client";

import { tabs } from "@/constants/tabs";
import { LabelledHref } from "@/interfaces/labelled-href";
import { Box, Flex, TabNav } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileTabs from "./mobile-tabs";
import ThemeSegmentedControl from "./theme-segmented-control";

/**
 * A responsive page header.
 *
 * Renders tabs for navigation and the theme segmented control at widths
 * including and above `sm`.
 * @returns The page header.
 */
export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <Box className="sticky top-0 z-10">
        <TabNav.Root className="bg-[var(--color-background)]" justify="center">
          <TabNav.Link
            asChild
            className="flex sm:absolute sm:left-0 font-bold text-[var(--accent-11)]"
          >
            <Link href="/">CU AIM</Link>
          </TabNav.Link>

          {tabs.map(({ href, label }: LabelledHref) => (
            <TabNav.Link
              key={href}
              active={
                href === "/" ? pathname === href : pathname.startsWith(href)
              }
              className="hidden sm:flex"
              asChild
            >
              <Link href={href}>{label}</Link>
            </TabNav.Link>
          ))}

          <Flex className="absolute right-0 items-center h-full pr-2 hidden sm:flex">
            <ThemeSegmentedControl size="1" radius="full" />
          </Flex>

          <Flex className="absolute right-0 items-center h-full pr-4 sm:hidden">
            <MobileTabs />
          </Flex>
        </TabNav.Root>
      </Box>
    </>
  );
}
