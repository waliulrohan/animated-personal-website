import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waliul Rohan",
  description: "waliul rohan,s personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-dvh w-screen bg-gradient-to-b from-blue-50 to-green-100 overflow-hidden">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100dvh-6rem)] w-screeen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
