import type { Metadata } from "next";

import "@fontsource-variable/onest";
import "@fontsource-variable/roboto-condensed";
import "@fontsource/poppins";

import "@/styles/globals.css";

import Header from "@/components/Header";
import Background from "@/components/Background";
import SocialsDesktop from "@/components/SocialsDesktop";
import Footer from "@/components/Footer";

import SmoothScrolling from "@/providers/SmoothScrolling";

export const metadata: Metadata = {
  title: "Gerard Doncel - FullStack Developer",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <SmoothScrolling>
          <SocialsDesktop />
          <Background />
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
