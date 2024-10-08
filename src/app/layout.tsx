import Footer from "@/components/footer";
import Header from "@/components/header";
import UnderConstructionBanner from "@/components/under-construction-banner";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Flex, Separator, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { AnalyticsProvider } from "../analytics/analytics-provider";
import "./../css/colours.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    <html lang="en" className={inter.variable}>
      <AnalyticsProvider>
        <body>
          <ThemeProvider attribute="class">
            <Theme accentColor="teal">
              <AnalyticsPageView />

              <SpeedInsights />

              <Flex className="flex-col w-screen">
                <Flex className="flex-col min-h-screen">
                  <UnderConstructionBanner />

                  <Header />
                  <Flex className="flex-col flex-grow">{children}</Flex>
                </Flex>

                <Separator className="w-full" />

                <Footer />
              </Flex>

              <Toaster
                icons={{
                  success: <CheckCircledIcon color="green" />,
                  info: <InfoCircledIcon color="blue" />,
                  warning: <ExclamationTriangleIcon color="orange" />,
                  error: <CrossCircledIcon color="red" />,
                }}
                toastOptions={{
                  style: {
                    background: "var(--color-background)",
                    color: "var(--gray-12)",
                    borderColor: "var(--gray-6)",
                  },
                }}
              />
            </Theme>
          </ThemeProvider>
        </body>
      </AnalyticsProvider>
    </html>
  );
}
