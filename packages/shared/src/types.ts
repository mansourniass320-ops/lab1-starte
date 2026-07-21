// Categories autorisees (Lab 5)
export type Categorie =
  | "concert"
  | "expo"
  | "conference"
  | "atelier"
  | "soutenance";

// Un evenement venant de Supabase
export interface Evenement {
  id: number;
  titre: string;
  categorie: Categorie;
  lieu_nom: string;
  date_debut: string;
  prix: number;
  image_url: string | null;
  organisateur_id: string | null;
  created_at: string;
}

// Input pour la creation d'un evenement
export interface NouvelEvenementInput {
  titre: string;
  categorie: Categorie;
  lieu_nom: string;
  date_debut: string;
  prix: number;
  image_url?: string | null;
  organisateur_id: string;
}

// Profil utilisateur
export interface Profile {
  id: string;
  nom: string;
  telephone: string | null;
  role: "PUBLIC" | "ORGANISATEUR" | "ADMIN";
  created_at: string;
}