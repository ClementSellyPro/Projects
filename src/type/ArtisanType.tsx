type AvisType = {
  _id: number,
  client: string,
  secteur: string,
  avis: string,
  artisan: string,
  domaine_artisan: string,
  logo: string
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
  competences: string[],
  presentation: string,
  qualifications_assurances: string[],
  logo: string,
  photo: string[],
  note: string,
  avis: AvisType[]
}