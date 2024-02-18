import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raskot Data",
  description: "Raskot data",
  manifest:'/manifest.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo512.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo512.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo512.png" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />
        <link rel="mask-icon" href="/logo512.png" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
