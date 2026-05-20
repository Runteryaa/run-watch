import type { Metadata } from "next";
import "./globals.css";
import Script from "next/navigation";

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
      <body style={{ position: 'relative' }}>
        {children}
        
        {/* Secret Console Message */}
        <script dangerouslySetInnerHTML={{
          __html: `
            console.log("%cHey! Bu site senin için sevgiyle yapıldı. ❤️", "color: #f472b6; font-size: 20px; font-weight: bold; font-family: sans-serif;");
            console.log("%cSeninle dizi izlemek dünyanın en güzel şeyi. ✨", "color: #94a3b8; font-size: 14px;");
          `
        }} />
      </body>
    </html>
  );
}
