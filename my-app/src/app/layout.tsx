
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import { CartProvider } from "@/context/Cartcontext";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import Footer from "../components/ui/Footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JB's Kitchen",
  description: "Delicious recipes and cooking tips",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <AuthProvider>
            <Navbar />
            <Toaster position="top-right" />
            {children}
            <Footer />
          </AuthProvider>
        </CartProvider>
      </body>
    </html>
  );
}
