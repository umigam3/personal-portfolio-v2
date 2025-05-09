import type { Metadata } from "next";
import "@styles/globals.css";
import "@fontsource-variable/onest";
import "@fontsource-variable/roboto-condensed";
import "@fontsource/poppins";
import Header from "@components/Header";
import Cursor from "@components/Cursor";
import SmoothScrolling from "@providers/SmoothScrolling";
import SocialsDesktop from "@components/SocialsDesktop";
import Footer from "@components/Footer";

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
          <Cursor />
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
