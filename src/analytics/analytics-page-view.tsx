"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";

/**
 * Captures a pageview event on page load.
 *
 * Adapted from PostHog documentation. Read more:
 * https://posthog.com/docs/libraries/next-js#app-router
 * @returns null
 */
export default function AnalyticsPageView(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (!pathname || !posthog) return;

    let url = window.origin + pathname;

    if (searchParams.toString()) url = url + `?${searchParams.toString()}`;

    posthog.capture("$pageview", {
      $current_url: url,
    });
  }, [pathname, searchParams, posthog]);

  return null;
}
