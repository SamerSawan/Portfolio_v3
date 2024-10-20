import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samer Sawan",
  description: "Samer Sawan's portfolio website",
  author: "Samer Sawan",
  keywords: "Samer, Sawan, Samer Sawan",
};

export default function RootLayout({ children }) {
  return (
    <html class="smooth-scroll bg-[#182734]" lang="en">
      <body className={inter.className}>{children}
        <Analytics/>
      </body>
    </html>
  );
}
