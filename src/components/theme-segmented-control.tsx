"use client";

import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SegmentedControl, Skeleton, Tooltip } from "@radix-ui/themes";
import { Responsive } from "@radix-ui/themes/props";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * The props for the `ThemeSegmentedControl` component.
 */
export interface ThemeSegmentedControlProps {
  size?: Responsive<"1" | "2" | "3"> | undefined;
  radius?: "small" | "none" | "medium" | "large" | "full" | undefined;
}

/**
 * A segmented control to change the persisted theme (i.e., appearance) using
 * `next-themes`.
 *
 * A skeleton is rendered until the component is mounted on the client, as the
 * theme cannot be determined on the server. Implementation adapted from the
 * `next-themes`
 * [documentation](https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch).
 * @param param0 The size and radius of the segmented control.
 * @returns The segmented control.
 */
export default function ThemeSegmentedControl({
  size,
  radius,
}: ThemeSegmentedControlProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Set the mounted state to true when the component is mounted on the client.
  useEffect(() => setMounted(true), []);

  const onValueChange = (value: string) => setTheme(value);

  return (
    <Skeleton loading={!mounted}>
      <SegmentedControl.Root
        onValueChange={onValueChange}
        value={theme}
        size={size}
        radius={radius}
      >
        <SegmentedControl.Item value="light">
          <Tooltip content="Light">
            <SunIcon />
          </Tooltip>
        </SegmentedControl.Item>

        <SegmentedControl.Item value="dark">
          <Tooltip content="Dark">
            <MoonIcon />
          </Tooltip>
        </SegmentedControl.Item>

        <SegmentedControl.Item value="system">
          <Tooltip content="System">
            <DesktopIcon />
          </Tooltip>
        </SegmentedControl.Item>
      </SegmentedControl.Root>
    </Skeleton>
  );
}
