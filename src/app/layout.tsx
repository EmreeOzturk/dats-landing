import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "DATSProject",
  description: "Monetize your idle computing power securely with DATSProject.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased select-none`}>
        <Header />
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
