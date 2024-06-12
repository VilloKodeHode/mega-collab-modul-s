import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header/organism/Header";
import { ScrollToTopBtn } from "./components/header/molecule/ScrollToTopBtnContainer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "modul S colab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-svh ${inter.className}`}>
        <ScrollToTopBtn />
        <Header />
        <main className="flex min-h-screen flex-col items-center gap-16 p-24 bg-background-dark">
          {children}
        </main>
      </body>
    </html>
  );
}
