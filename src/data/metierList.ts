export const metierList = [
    { id: 1, metierName: "Aménagement ext.", iconMetier: "amenagement.png", iconDimension: 20},
    { id: 2, metierName: "Architecture", iconMetier: "architecte.png", iconDimension: 20},
    { id: 3, metierName: "Carrelage", iconMetier: "carreleur.png", iconDimension: 25},
    { id: 4, metierName: "Charpente/Couverture", iconMetier: "charpentier.png", iconDimension: 25},
    { id: 5, metierName: "Climatisation", iconMetier: "clim.svg", iconDimension: 20},
    { id: 6, metierName: "Cuisine/Dressing", iconMetier: "cuisiniste.png", iconDimension: 25},
    { id: 7, metierName: "Décoration intérieur", iconMetier: "decorateur.png", iconDimension: 20},

    { id: 8, metierName: "Dessin <span className='text-xs ml-2'> (permis de construire)</span>", iconMetier: "dessinateur.png", iconDimension: 20},
    { id: 9, metierName: "Electricité", iconMetier: "electricien.png", iconDimension: 20},
    { id: 10, metierName: "Maçonnerie", iconMetier: "macon.svg", iconDimension: 16},
    { id: 11, metierName: "Maison individuelle", iconMetier: "maison.png", iconDimension: 20},
    { id: 12, metierName: "Maitre d&apos;oeuvre", iconMetier: "maitre.png", iconDimension: 20},
    { id: 13, metierName: "Menuiserie aluminium", iconMetier: "menuisier.png", iconDimension: 20},
    { id: 14, metierName: "Peinture", iconMetier: "peintre.png", iconDimension: 20},

    
    { id: 15, metierName: "Piscine", iconMetier: "pisciniste.png", iconDimension: 20},
    { id: 16, metierName: "Plaquiste", iconMetier: "plaquiste.png", iconDimension: 20},
    { id: 17, metierName: "Plomberie", iconMetier: "plombier.png", iconDimension: 25},
    { id: 18, metierName: "Portail/Automatisme", iconMetier: "portail.png", iconDimension: 20},
    { id: 19, metierName: "Rénovation", iconMetier: "renovation.png", iconDimension: 20},
    { id: 20, metierName: "Terrassement", iconMetier: "terrassier.png", iconDimension: 20},
] as const

export type Metier = (typeof metierList)[number]

export type MetierName = Metier["metierName"];