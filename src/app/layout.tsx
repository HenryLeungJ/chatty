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
  children, support, test
}: Readonly<{
  children: React.ReactNode; support: React.ReactNode; test: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col sm:h-5/6 items-center justify-between p-24">
          <div className="z-10 max-w-5xl h-full w-full items-center justify-between sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-5 font-mono text-sm">
            <div className="flex justify-center items-center rounded-lg bg-indigo-200 h-full row-span-2 w-full">
              {children}
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg bg-indigo-200 h-full">
              <h1 className="font-black text-xl mb-4">Rules</h1>
              <p className="mb-2">No Illegal Activities</p>
              <p>Have fun.</p>
            </div>
            <div className="flex justify-center items-center rounded-lg bg-indigo-200 h-full">
              <h1 className="font-black text-xl mb-4">Support The Creator</h1>
              {support}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
