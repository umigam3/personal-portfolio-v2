import type { Metadata } from "next";
import "@styles/globals.css";
import "@fontsource-variable/onest";
import Header from "@components/Header";

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
      <body className="antialiased text-white">
        <Header />
        <div className="fixed w-full h-dvh -z-10">
          <div className="absolute bottom-0 left-[-15%] right-0 top-[-10%] h-[750px] w-[750px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(124,58,237,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-15%] top-[-10%] h-[750px] w-[750px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(124,58,237,.15),rgba(255,255,255,0))]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
