import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import PageTransitionProvider from "@/components/animated/pageTransitionProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waliul Rohan",
  description: "waliul Rohan's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> I will turn tthi on later*/}
      <body className={''}>
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
