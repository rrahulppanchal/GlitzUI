import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlitzUI - Docs",
  description: "GlitzUI creared by Rahul Panchal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen w-full flex-col">
          <header><Header /></header>
          {children}
        </div>
      </body>
    </html>
  );
}
