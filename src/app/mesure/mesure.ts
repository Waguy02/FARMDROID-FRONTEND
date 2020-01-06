import { Capteur } from "../capteur/capteur";
import { Parcelle } from "../parcelle/parcelle";

export class Mesure {
  _id: number;
  capteur: Capteur;
  parcelle: Parcelle;
  valeur: number;
  date: Date;
}
