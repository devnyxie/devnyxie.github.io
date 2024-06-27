import "ress";
import "./classes.css";
import "./global.css";
import "./blog.css";

import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav/nav";
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
      className={cx(GeistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <main>
            <Navbar />
            <hr style={{ margin: 0 }} />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
