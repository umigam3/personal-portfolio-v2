import type { Metadata } from "next";
import "@styles/globals.css";
import "@fontsource-variable/onest";
import "@fontsource-variable/roboto-condensed";
import Header from "@components/Header";
import Cursor from "@components/Cursor";
import SmoothScrolling from "@providers/SmoothScrolling";
import LinkedIn from "@components/icons/LinkedIn";
import GitHub from "@components/icons/GitHub";
import Socials from "@components/Socials";

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
          <Socials />
          <Cursor />
          <Header />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
