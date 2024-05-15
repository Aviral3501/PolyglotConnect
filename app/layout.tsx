import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polyglot App",
  description: "Realtime chat app with translation ability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mx-4">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
