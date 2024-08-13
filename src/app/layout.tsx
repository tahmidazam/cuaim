import Header from "@/components/header";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
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
              <Header />

              {children}

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
