"use client"

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FilterContextProvider } from "@/context/FilterContext";
import { DataContextProvider } from "@/context/DataContext";
import Beta from "@/components/Beta";
import { Toaster } from "react-hot-toast";
import RGPD from "@/components/RGPD";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Beta />
        <DataContextProvider>
        <FilterContextProvider>
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          {/* <RGPD /> */}
        </FilterContextProvider>
        </DataContextProvider>
      </body>
    </html>
  );
}
