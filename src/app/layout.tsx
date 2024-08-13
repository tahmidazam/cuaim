import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { AnalyticsProvider } from "../analytics/analytics-provider";
import "./globals.css";

const AnalyticsPageView = dynamic(
  () => import("../analytics/analytics-page-view"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "CU AIM",
  description:
    "Cambridge University Artificial Intelligence in Medicine Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnalyticsProvider>
        <body>
          <ThemeProvider attribute="class">
            <Theme>
              <AnalyticsPageView />
              {children}
            </Theme>
          </ThemeProvider>
        </body>
      </AnalyticsProvider>
    </html>
  );
}
