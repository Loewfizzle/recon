import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Recon Technologies | On-Site HOCl Generation for Dairy Farms",
  description: "Generate fresh sodium hypochlorite (HOCl) on your dairy farm for pre-dip and parlor cleaning. Cut chemical costs dramatically with Recon ECALogical machines. Serving dairy producers since 2008.",
  metadataBase: new URL("https://www.recontechusa.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Recon Technologies | On-Farm Sodium Hypochlorite for Dairy",
    description: "On-site ECA generation for fresh, low-cost teat dip. Single & Dual Cell machines. Calculate your savings today.",
    images: [{ url: "/logo.png" }], // Replace with a proper 1200x630 og-image.png in /public for best sharing
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
