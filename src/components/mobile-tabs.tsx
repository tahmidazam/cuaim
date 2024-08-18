"use client";

import { tabs } from "@/constants/tabs";
import { LabelledHref } from "@/interfaces/labelled-href";
import isTabActive from "@/utils/isTabActive";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Flex, Heading, IconButton, Separator } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BlurEntry from "./blur-entry";

/**
 * A button to open a tab navigation menu for mobile devices.
 */
export default function MobileTabs() {
  const pathname = usePathname();
  const [isPresented, setIsPresented] = useState(false);

  const togglePresentation = () => {
    // Update the presentation state.
    setIsPresented(!isPresented);

    // Disable scrolling on the body when the menu is presented.
    document.body.style.overflow = isPresented ? "auto" : "hidden";
  };

  // On unmount, reset the body overflow to auto.
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <IconButton variant="ghost" onClick={togglePresentation}>
        <HamburgerMenuIcon />
      </IconButton>

      <AnimatePresence>
        {isPresented && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 w-screen h-screen z-20 bg-[var(--gray-a10)]"
            />

            <motion.div
              initial={{ transform: "translateY(-100%)" }}
              animate={{ transform: "translateY(0%)" }}
              exit={{ transform: "translateY(-100%)" }}
              transition={{ duration: 0.4, type: "spring", bounce: 0 }}
              className="fixed top-0 left-0 w-screen h-screen z-30 bg-[var(--color-background)]"
            >
              <Flex className="flex-col items-start h-full relative">
                <Flex className="absolute top-0 right-0 pt-4 pr-4 sm:hidden">
                  <IconButton variant="ghost" onClick={togglePresentation}>
                    <Cross1Icon />
                  </IconButton>
                </Flex>

                <Flex className="flex-col items-start gap-4 p-4 h-full justify-center flex-grow">
                  {tabs.map(({ href, label }: LabelledHref, index: number) => (
                    <BlurEntry
                      delayIndex={index}
                      key={index}
                      delayDelta={0.05}
                      duration={1}
                    >
                      <Link href={href} onClick={togglePresentation}>
                        <Heading
                          size="7"
                          weight="bold"
                          color={
                            isTabActive(href, pathname) ? "pink" : undefined
                          }
                        >
                          {label}
                        </Heading>
                      </Link>
                    </BlurEntry>
                  ))}
                </Flex>

                <Separator className="w-full" />
              </Flex>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
