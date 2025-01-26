import type { Metadata } from "next";
import "@styles/globals.css";
import "@fontsource-variable/onest";
import Header from "@components/Header";
import Head from "next/head";
import Cursor from "@components/Cursor";

export const metadata: Metadata = {
  title: "Gerard Doncel",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="color-scheme" content="dark" />
      </Head>
      <body className="text-white">
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
