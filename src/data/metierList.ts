export const metierList = [
    { id: 1, nameMetier: "Aménagement ext.", iconMetier: "/icon_metier/amenagement.png", iconDimension: 20},
    { id: 2, nameMetier: "Architecture", iconMetier: "/icon_metier/architecte.png", iconDimension: 20},
    { id: 3, nameMetier: "Carrelage", iconMetier: "/icon_metier/carreleur.png", iconDimension: 25},
    { id: 4, nameMetier: "Charpente/Couverture", iconMetier: "/icon_metier/charpentier.png", iconDimension: 25},
    { id: 5, nameMetier: "Climatisation", iconMetier: "/icon_metier/clim.svg", iconDimension: 20},
    { id: 6, nameMetier: "Cuisine/Dressing", iconMetier: "/icon_metier/cuisiniste.png", iconDimension: 25},
    { id: 7, nameMetier: "Décoration intérieur", iconMetier: "/icon_metier/decorateur.png", iconDimension: 20},

    // { id: 8, nameMetier: "Dessin <span className='text-xs ml-2'> (permis de construire)</span>", iconMetier: "dessinateur.png", iconDimension: 20},
    { id: 8, nameMetier: "Dessin", iconMetier: "/icon_metier/dessinateur.png", iconDimension: 20},
    { id: 9, nameMetier: "Electricité", iconMetier: "/icon_metier/electricien.png", iconDimension: 20},
    { id: 10, nameMetier: "Maçonnerie", iconMetier: "/icon_metier/macon.svg", iconDimension: 16},
    { id: 11, nameMetier: "Maison individuelle", iconMetier: "/icon_metier/maison.png", iconDimension: 20},
    { id: 12, nameMetier: "Maitre d'oeuvre", iconMetier: "/icon_metier/maitre.png", iconDimension: 20},
    { id: 13, nameMetier: "Menuiserie aluminium", iconMetier: "/icon_metier/menuisier.png", iconDimension: 20},
    { id: 14, nameMetier: "Peinture", iconMetier: "/icon_metier/peintre.png", iconDimension: 20},
    
    { id: 15, nameMetier: "Piscine", iconMetier: "/icon_metier/pisciniste.png", iconDimension: 20},
    { id: 16, nameMetier: "Plaquiste", iconMetier: "/icon_metier/plaquiste.png", iconDimension: 20},
    { id: 17, nameMetier: "Plomberie", iconMetier: "/icon_metier/plombier.png", iconDimension: 25},
    { id: 18, nameMetier: "Portail/Automatisme", iconMetier: "/icon_metier/portail.png", iconDimension: 20},
    { id: 19, nameMetier: "Rénovation", iconMetier: "/icon_metier/renovation.png", iconDimension: 20},
    { id: 20, nameMetier: "Terrassement", iconMetier: "/icon_metier/terrassier.png", iconDimension: 20},
] as const

export type Metier = (typeof metierList)[number]

export type MetierName = Metier["nameMetier"];