import type { Metadata } from "next";
import "@styles/globals.css";
import "@fontsource-variable/onest";
import "@fontsource-variable/roboto-condensed";
import Header from "@components/Header";
import Cursor from "@components/Cursor";
import SmoothScrolling from "@providers/SmoothScrolling";
import LinkedIn from "@components/icons/LinkedIn";
import GitHub from "@components/icons/GitHub";

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
          <div className="flex flex-col gap-4 items-end fixed left-4 top-1/2 -translate-y-1/2 z-50">
            <a className="bg-[#191919] p-4 rounded-full cursor-pointer hover:bg-primary duration-200">
              <GitHub className="w-5 h-5" />
            </a>
            <a className="bg-[#191919] p-4 rounded-full cursor-pointer hover:bg-primary duration-200">
              <LinkedIn className="w-5 h-5" />
            </a>
          </div>
          <Cursor />
          <Header />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
