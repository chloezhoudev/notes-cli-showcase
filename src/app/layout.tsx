import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavigationHeader from "./components/NavigationHeader";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notes CLI - Smart Note-Taking from the Command Line",
  description: "A powerful CLI tool for efficient note-taking, organization, and retrieval. Built with modern technology for developers who love the terminal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        <NavigationHeader />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
