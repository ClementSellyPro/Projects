import React from "react";
import { promises as fs } from "fs";
import TestimonialCardHome from "./TestimonialCardHome";

type dataType = {
  _id: number;
  client: string;
  secteur: string;
  avis: string;
  artisan: string;
  id_artisan: number;
  domaine_artisan: string;
  logo: string;
};

export default async function Testimonials() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/testimonials.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <div className="Testimonials md:p-20 p-5 bg-gradient-to-br from-subtleKalipro to-white">
      <h1 className="Testimonials-title mt-10 md:text-5xl text-3xl font">
        Ils ont fait confiance aux artisans présent sur{" "}
        <span className="font-semibold">KALIPRO</span>
        {/* Ils sont passés par <span className="font-semibold">KALIPRO</span> */}
      </h1>

      <div className="testimonial-part flex justify-around flex-wrap md:gap-20 gap-10 md:mt-10 mt-10 w-full">
        {data.map((testimonial: dataType) => {
          return (
            <TestimonialCardHome
              key={testimonial._id}
              client={testimonial.client}
              secteur={testimonial.secteur}
              avis={testimonial.avis}
              artisan={testimonial.artisan}
              id_artisan={testimonial.id_artisan}
              domaine_artisan={testimonial.domaine_artisan}
              logo={testimonial.logo}
            />
          );
        })}
      </div>
    </div>
  );
}
