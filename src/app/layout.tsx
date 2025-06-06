import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../css/globals.css";
import { CintilloOfert } from "@/components/Hero/CintilloOfert";
import { HeroNav } from "@/components/Hero/HeroNav";
import { Footer } from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ontec",
  description: "Tu tienda favorita para la compra de todo tu equipo gamer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <CintilloOfert />
        <HeroNav/>  
        {children}
        <Footer />
      </body>
    </html>
  );
}
