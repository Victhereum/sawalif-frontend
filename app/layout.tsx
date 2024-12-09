import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aspekta = localFont({
  src: "./fonts/Aspekta-450.otf",
  variable: "--font-aspekta",
  weight: "400 900",
});

export const metadata: Metadata = {
  title: "Sawalif",
  description: "Connect With Random People Around the World Instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aspekta.variable} antialiased`}>{children}</body>
    </html>
  );
}
