"use client";

import { Box, Flex, Spinner } from "@radix-ui/themes";
import { useState } from "react";

/**
 * Embeds a Google Maps instance usin an iframe, with a loading indicator during
 * lazy loading.
 * @param param0 The source URL for the iframe.
 */
export default function MapEmbed({ src }: { src: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box
      className="relative -mx-[24px] -mt-[24px]"
      style={{ width: "calc(100% + 48px)" }}
    >
      {isLoading && (
        <Flex className="absolute w-full h-full items-center justify-center bg-[var(--gray-3)]">
          <Spinner />
        </Flex>
      )}
      <iframe
        style={{
          border: 0,
          opacity: isLoading ? 0 : 1,
          width: "100%",
          height: "300px",
        }}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        src={src}
      />
    </Box>
  );
}
