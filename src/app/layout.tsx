"use client"

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FilterContextProvider } from "@/context/FilterContext";
import { DataContextProvider } from "@/context/DataContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <DataContextProvider>
        <FilterContextProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </FilterContextProvider>
        </DataContextProvider>
      </body>
    </html>
  );
}
