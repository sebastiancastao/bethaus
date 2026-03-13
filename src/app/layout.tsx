import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const reportSans = Inter({
  variable: "--font-report-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bethaus Project | Interactive Report",
  description:
    "Interactive implementation report for the Bethaus project covering technical setup, SEO, brand, operations, and data infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${reportSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
