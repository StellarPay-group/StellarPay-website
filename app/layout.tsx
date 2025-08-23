import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StellarPay | Send money & spend anywhere in just a few taps",
  description: "StellarPay | Send money & spend anywhere in just a few taps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
