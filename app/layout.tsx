import "ress";
//import from node_modules/modern-normalize/modern-normalize.css
// import "modern-normalize";
import "./classes.css";
import "./global.css";
import "./blog.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer/footer";
import { baseUrl } from "./sitemap";
import { ThemeProvider } from "next-themes";
//ress css import

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Tim",
    template: "%s | Tim",
  },
  description: "This is my personal website!",
  openGraph: {
    title: "My Portfolio",
    description: "This is my personal website!",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <main>
            <Navbar />
            <hr style={{ margin: 0 }} />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
