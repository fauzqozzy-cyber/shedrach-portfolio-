import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zikaro — Webflow Designer & Developer",
  description:
    "I design and build thoughtful, high-performing websites for ambitious brands and businesses.",
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
