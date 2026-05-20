import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RunWatch | Series Tracker",
  description: "Watch your favorite series with custom subtitles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
