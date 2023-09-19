import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  weight: ["400", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Result summary",
  description: "Code by AcerNg548",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hanken.className}>{children}</body>
    </html>
  );
}
