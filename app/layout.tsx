import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jishan Ahmed | Portfolio",
  description: "Jishan is a full stack developer with 1 year of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#fcdbdc] absolute top-[-6rem] right[1rem] h-[31.25rem] w-[35.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
        <div className="bg-[#c0b9f9] absolute top-[5rem] left[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] -z-10 lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
