import Navbar from "@/components/Navbar";
import { logger } from "@/lib/logger";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./page";
import { Toaster } from "@/components/ui/sonner";

function validateEnv() {
  const requiredVars = ["NODE_ENV"];
  const missing = requiredVars.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    logger.error("config_invalid", { missing });
    process.exit(1);
  }

  logger.info("config_valid", { nodeEnv: process.env.NODE_ENV });
}

validateEnv();
logger.info("server_started", {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulkoju.com.np/"),
  title: {
    default: `${siteConfig.name} - Software Developer`,
    template: `%s - Software Developer`,
  },
  description: siteConfig.description,

  keywords: [
    "rahul",
    "koju",
    "Rahul",
    "RAHUL",
    "KOJU",
    "Koju",
    "Rahul Koju",
    "rahul koju",
    "rahulkoju",
    "RahulKoju",
    "koju rahul",
    "Koju Rahul",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER",
    "programmer",
    "RAHUL KOJU",
    "website",
    "@rahulkoju",
    "RahulKoju",
    "rahul developer",
  ],
  authors: [
    {
      name: "Rahul Koju",
      url: "https://github.com/RahulKoju",
    },
  ],
  creator: "Rahul Koju",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`/og-image.png`],
    creator: "@rahul_koju",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative break-words min-h-dvh items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-6 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" },
          )}
        >
          <Navbar />
          {children}
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
