import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollToTopBtn } from "./components/header/molecule/ScrollToTopBtnContainer";
import { ThemeProvider } from "next-themes";
import { Header } from "./components/header/organism/Header";
import { Footer } from "./components/footer/organism/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "modul S colab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col min-h-svh ${inter.className} text-primary-dark dark:text-primary`} >
        <ThemeProvider attribute="class">
          <Header />
          <main className="flex min-h-screen flex-col items-center gap-16 p-24 bg-background dark:bg-background-dark transition-colors duration-200 ease-linear">
            {children}
          </main>
          <Footer />
          <ScrollToTopBtn />
        </ThemeProvider>
      </body>
    </html>
  );
}
