import type { Metadata } from "next";
import "@styles/globals.css";
import "@fontsource-variable/onest";
import Header from "@components/Header";
import Cursor from "@components/Cursor";
import SmoothScrolling from "@providers/SmoothScrolling";

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
      <body className="text-white">
        <SmoothScrolling>
          <Cursor />
          <Header />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
