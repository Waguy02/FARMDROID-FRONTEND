import { Capteur } from "../capteur/capteur";
import { Parcelle } from "../parcelle/parcelle";

export class PlanCapteur {
  _id: number;
  capteur: Capteur;
  parcelle: Parcelle;
  type: String;
  statut: Boolean;
}
