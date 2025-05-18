import type { Metadata } from "next";
import { Roboto, Big_Shoulders_Display } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const bigShoulders = Big_Shoulders_Display({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fans.pump",
  description: "Fans.pump is revolutionizing content creation with blockchain technology",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${bigShoulders.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
