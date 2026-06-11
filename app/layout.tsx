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
  metadataBase: new URL("https://recon.loewfizzle.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Recon Technologies | On-Farm Sodium Hypochlorite for Dairy",
    description: "On-site ECA generation for fresh, low-cost teat dip. Single & Dual Cell machines. Calculate your savings today.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Recon Technologies — On-site HOCl generation for dairy farms" }],
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
