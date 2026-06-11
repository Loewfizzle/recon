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
    title: "Recon Technologies | On-Farm Hypochlorous Acid for Dairy",
    description: "On-site generation of fresh hypochlorous acid (HOCl) for teat dip and parlor cleaning. Single & Dual Cell machines. Calculate your savings today.",
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'history.scrollRestoration="manual";window.addEventListener("load",function(){window.scrollTo(0,0)});window.addEventListener("pageshow",function(){window.scrollTo(0,0)})' }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
