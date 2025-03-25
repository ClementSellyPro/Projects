"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface propsType {
  _id: number;
  name: string;
  domaine_artisan: string;
  secteur: string[];
  logo: string;
  note: string;
}

const ResultCard = ({
  _id,
  name,
  domaine_artisan,
  secteur,
  logo,
  note,
}: propsType) => {
  const router = useRouter();

  function handleClick() {
    router.push(`/artisan/${_id}`);
  }

  return (
    <div
      onClick={handleClick}
      className="relative ResultCard bg-white cursor-pointer border rounded-lg lg:w-wResultCardLg w-full h-44 p-3 shadow-md hover:shadow-xl"
    >
      <div className="flex items-center">
        {/* logo */}
        {logo ? (
          <Image
            className="flex items-center justify-center rounded-full border"
            src={logo}
            alt="Logo"
            width={80}
            height={80}
          />
        ) : (
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-slate-500">
            logo
          </div>
        )}

        <div className="info-section ml-4">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-xs text-slate-500">{domaine_artisan}</p>
          <p className="mt-6 text-sm">
            Zone intervention: {secteur.map((secteur) => secteur + ", ")}
          </p>
        </div>
      </div>

      {/* 
        <div className='flex justify-between mt-4'>
            <div className={`${disponibilite? 'text-lime-500' : 'text-orange-400'} text-xs flex items-center`}>
                <div className={`h-3 w-3 rounded-full mr-2 ${disponibilite? 'bg-lime-500' : 'bg-orange-400'}`}></div>
                {disponibilite? `Disponible rapidement` : `Disponible dans ${temps_disponibilite} mois`}
            </div>
        </div> */}
      <div>
        <div className="absolute left-3 bottom-3 flex items-center gap-1.5">
          <p>{note}</p>
          <Image src={"/icon/etoile.png"} alt="Note" width={18} height={18} />
        </div>

        <button className="absolute right-3 bottom-3 py-1.5 md:px-8 px-4 font-semibold bg-kalipro hover:opacity-75 text-white rounded-md">
          {" "}
          Contacter
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
