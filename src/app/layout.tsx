import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cmac",
  description: "A clean slate Next.js app",
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
