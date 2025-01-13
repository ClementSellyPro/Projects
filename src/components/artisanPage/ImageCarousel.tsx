'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { DialogTitle } from '@radix-ui/react-dialog'

interface PhotoType {
  src: string
}

interface PhotosType {
    photos: PhotoType[]
}

export default function ImageCarousel({photos} : PhotosType) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageStyle, setImageStyle] = useState({});

  useEffect(() => {
    const updateImageStyle = () => {
      const image = photos[currentImageIndex]
      const aspectRatio = 400 / 400
      const isLandscape = aspectRatio > 1

      if (isLandscape) {
        setImageStyle({
          width: '100%',
          height: 'auto',
          maxHeight: '90vh',
          objectFit: 'contain',
        })
      } else {
        setImageStyle({
          width: 'auto',
          height: '90vh',
          maxWidth: '100%',
          objectFit: 'contain',
        })
      }
    }
    updateImageStyle()
    window.addEventListener('resize', updateImageStyle)
    return () => window.removeEventListener('resize', updateImageStyle)
  }, [currentImageIndex, photos])

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index)
    setIsOpen(true)
  }

  const closeCarousel = () => {
    setIsOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  return (
    <div className="container pb-10 border-b">
      <h2 className='font-semibold mb-5 text-2xl'>Photos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo: PhotoType , index: number) => (
          <button
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2"
            onClick={() => openCarousel(index)}
          >
          {photos &&
            <Image
              src={photo.src}
              alt="Photo"
              width={400}
              height={400}
              style={{ width: '100%', height: '100%' }}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
          }
          </button>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
        <DialogDescription className="sr-only">
          Gallerie photo. Utiliser les flèches pour changer de photos.
        </DialogDescription>
          
          <div className="relative flex items-center justify-center w-full h-full">
            {photos &&
              <Image
                className='rounded-md'
                src={photos[currentImageIndex].src}
                alt= "Photo"
                width={400}
                height={400}
                style={imageStyle}
                priority
              />
            }
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 rounded-full"
              onClick={closeCarousel}
            >
              {/* <X className="h-4 w-4" /> */}
              <span className="sr-only">Fermer</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Photo précédente</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Photo suivante</span>
            </Button>
          </div>
          <div className="text-center -mt-2 p-2 bg-background">
            Photo {currentImageIndex + 1} sur {photos.length}
            
            <DialogTitle>
              <p className='font-semibold ml-8 mt-1 text-2xl'>Photos <span className="text-sm font-thin">(images généré par AI comme exemple)</span></p>
            </DialogTitle>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}