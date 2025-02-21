//use this page to add title and description, fonts etc.  

import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Pete Andrew",
  description: "Portfolio of my works",
};

export default function RootLayout({ children }) {
  return (
    // scroll smooth makes the page smooth scroll to targets 
    <html lang="en" className="scroll-smooth">
      <body
      // leading 8 increases line height
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
