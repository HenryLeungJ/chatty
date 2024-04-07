import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatty",
  description: "The chatting app that will make you a MILLION friends!",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col sm:h-5/6 items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
