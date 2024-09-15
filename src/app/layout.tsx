"use client"

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FilterContextProvider } from "@/context/FilterContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <FilterContextProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </FilterContextProvider>
      </body>
    </html>
  );
}
