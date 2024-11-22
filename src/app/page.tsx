import type { Metadata } from "next";
import Hero from '@/components/Hero';
import Marquee from "@/components/Marquee";
import Testimonials from '@/components/Testimonials';
import NewArtisans from "@/components/NewArtisans";
import Rejoins from "@/components/Rejoins";

export const metadata: Metadata = {
  title: "Kalipro",
  description: "Des artisans de qualité à proximité de chez vous.",
  keywords:["artisan", "plombier", "reunion", "travaux", "construction"]
};

const Home = () => {

  return (
    <div>
      {/* La grande image quand on arive sur le site, dans lequel se trouve le grand input (de la version desktop), mais aussi les petits input (de la version mobile, le grand input est "hidden" en version mobile) */}
      <Hero />

      {/* La petite bande deroulante avec tous les metiers */}
      <Marquee />

      {/* Affiche quelques artisans (peut etre les derniers entrants) */}
      <NewArtisans />

      {/* <Rejoins /> */}

      {/* Les temoignages a l'accueil */}
      <Testimonials />
    </div>
  )
}

export default Home