import { Espece } from "../espece/espece";

export class Parcelle {
  _id: number;
  location: any;
  espece: Espece
  date_semis: Date;
  nombre_plant: number;
  get fullName(){
    return this.espece.name+" ("+ this.location+") :"+ this.nombre_plant+" plants";
  }
  
  static display(parcelle){
     return parcelle.espece.name+" ("+ parcelle.location+") :"+ parcelle.nombre_plant+" plants"; 
  }

  
}
