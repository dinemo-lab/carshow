import type { Metadata } from "next";
 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 

 

export const metadata: Metadata = {
  title: "Car hi Car",
  description: "Come and buy the world's best Cars",
};

const root = function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

export default root