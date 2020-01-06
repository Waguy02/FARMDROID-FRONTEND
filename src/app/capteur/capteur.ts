export class Capteur {
  _id: number;
  name: string;
  type_grandeur: string;
  description: string;
  effectif: number;
  statut: boolean=true;
  date_creation:Date;
  date_modification:Date;
  static display(capteur){

    return capteur.name+" ( "+capteur.type_grandeur+ ")";
  }
}
