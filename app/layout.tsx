import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zikaro — Webflow Designer & Developer",
  description:
    "I design and develop high-performing Webflow websites, including Figma-to-Webflow builds, website redesigns, CMS development, landing pages and responsive Webflow experiences.",
  metadataBase: new URL("https://zikaro.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
