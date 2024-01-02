import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../../public/fonts/gordqucikblack-p7erv.otf",
  display: "swap",
});

export default function RootLayout({
  children,
  modal,
  menu,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  menu: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        {children}
        {modal}
        {menu}
      </body>
      {/* <Footer /> */}
    </html>
  );
}
