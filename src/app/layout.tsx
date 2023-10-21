"use client"
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import './globals.css'
import { ThemeProvider } from "next-themes";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem = {true} attribute="class">
        <Navbar />
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
