"use client"

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FilterContextProvider } from "@/context/FilterContext";
import DataContext, { DataContextProvider } from "@/context/DataContext";
import Beta from "@/components/Beta";
import { Toaster } from "react-hot-toast";
import RGPD from "@/components/RGPD";
import { useEffect, useContext } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {setData} = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const res = await fetch('http://localhost:3000/artisans.json');
        if (!res.ok){
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const dataFetch = await res.json();
        setData(dataFetch);
      } catch(error) {
        console.error("Error fetching data : ", error)
      }
        
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


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
