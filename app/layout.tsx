import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "StellarPay | Send money & spend anywhere in just a few taps",
  description: "StellarPay | Send money & spend anywhere in just a few taps. Instant, secure global money transfers with mobile money support.",
  keywords: ["money transfer", "global payments", "mobile money", "international transfers", "StellarPay"],
  authors: [{ name: "StellarPay Team" }],
  creator: "StellarPay",
  publisher: "StellarPay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stellarpay.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "StellarPay | Send money & spend anywhere in just a few taps",
    description: "Instant, secure global money transfers with mobile money support.",
    url: 'https://stellarpay.app',
    siteName: 'StellarPay',
    images: [
      {
        url: '/images/stellarbanking_logo.png',
        width: 1200,
        height: 630,
        alt: 'StellarPay Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "StellarPay | Send money & spend anywhere in just a few taps",
    description: "Instant, secure global money transfers with mobile money support.",
    images: ['/images/stellarbanking_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/stellarbanking_logo.png",
    shortcut: "/images/stellarbanking_logo.png",
    apple: "/images/stellarbanking_logo.png",
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="theme-color" content="#0065ff" />
        <meta name="msapplication-TileColor" content="#0065ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="StellarPay" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
