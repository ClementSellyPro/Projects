type avisType = {
  _id: number,
  client: string,
  secteur: string,
  avis: string,
  artisan: string,
  secteur_artisan: string
}


export interface Artisan {
    _id: number,
    name: string,
    domaine_artisan: string,
    phone: string,
    mail: string,
    location: string,
    secteur: string[],
    intervention_img: string,
    disponibilite: boolean,
    temps_disponibilite: number,
    competences: string[],
    presentation: string,
    qualifications_assurances: string[],
    photo: string[],
    avis: avisType[]
  }