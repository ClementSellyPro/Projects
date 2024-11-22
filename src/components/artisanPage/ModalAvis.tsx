import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import TestimonialCardV2 from '../TestimonialCardV2';
import { AvisType } from '@/type/AvisType';


interface PropsType {
    avisClient: AvisType[]
}

function ModalAvis({avisClient}: PropsType) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='mt-6'>
          {/* Trigger to open the dialog */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="py-2 px-5 border-2 rounded-full border-kalipro font-semibold bg-white text-kalipro hover:bg-subtleKalipro">Voir plus d&apos;avis</button>
            </DialogTrigger>
    
            {/* The actual dialog content */}
            <DialogContent className='m-4 p-6 max-h-[80vh] overflow-y-auto rounded-lg' style={{margin: 'auto'}}>
              <DialogHeader>
                <DialogTitle className='text-xl'>Tous les avis pour <span className='text-blueKalipro'>{avisClient[0].artisan}</span></DialogTitle>
              </DialogHeader>

              {
                avisClient.map((avis: AvisType) => {
                    return (
                        <TestimonialCardV2 key={avis._id} client={avis.client} secteur={avis.secteur} avis={avis.avis} artisan={avis.artisan} domaine_artisan={avis.domaine_artisan}>

                        </TestimonialCardV2>
                    )
                })
              }
              
              <button onClick={() => setIsOpen(false)} className="border border-kalipro rounded-full py-2 font-semibold text-kalipro hover:bg-subtleKalipro bg-white">
                Fermer
              </button>
            </DialogContent>
          </Dialog>
        </div>
      );
}

export default ModalAvis