import AppLayout from "@/layouts/app-layout/AppLayout";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Test dashboard",
  description: "Test dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} font-sans`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
