import type { Metadata } from "next";
import Hero from '@/components/Hero';
import Marquee from "@/components/Marquee";
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: "Kalipro",
  description: "Des artisans de qualité à proximité de chez vous.",
};

const page = () => {
  return (
    <div className=''>
      <Hero />
      <Marquee />
      <Testimonials />
    </div>
  )
}

export default page