import { Espece } from "../espece/espece";

export class Parcelle {
  _id: number;
  location: any;
  espece: Espece
  date_semis: Date;
  nombre_plant: number;
  static display(parcelle){
     return parcelle.espece.name+" ("+ parcelle.location+") :"+ parcelle.nombre_plant+" plants"; 
  }

  
}
