import { Capteur } from './capteur';
import { CapteurFilter } from './capteur-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class CapteurService {
  capteurList: Capteur[] = [];
  api = 'http://localhost:5000/api/capteur';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Capteur> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Capteur>(url, {params, headers});
  }

  load(filter: CapteurFilter): void {
    this.find(filter).subscribe(result => {
        this.capteurList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  

  
  findFilter(filter: CapteurFilter, fullMatch:boolean=false){
    
    return this.find(new CapteurFilter())
   .pipe(
     tap((capteurs:Capteur[]) => {
       var foundCapteurs=capteurs
         .map((capteur) => {var current:Capteur=new Capteur();Object.assign(current,capteur);;  return current})
         .filter(capteur => 
          {
            try{
              return (capteur.name.toLowerCase().includes(filter.name.toLowerCase())||(capteur.type_grandeur!=null&&capteur.type_grandeur.toLowerCase().includes(filter.type_grandeur.toLowerCase()))&&capteur.statut==true)
              
            }catch(e){
              return true;
            }
          
          
          }
          )


         capteurs.splice(0,capteurs.length);
         for(var capteur of foundCapteurs){
           capteurs.push(capteur);
         }
     })
     );
 }


 












 




  

  find(filter: CapteurFilter): Observable<Capteur[]> {
    const params = {
      'type_grandeur': filter.type_grandeur,
 
    };

    return this.http.get<Capteur[]>(this.api, {params, headers});
  }

  save(entity: Capteur): Observable<Capteur> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Capteur>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Capteur>(url, entity, {headers, params});
    }
  }

  delete(entity: Capteur): Observable<Capteur> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Capteur>(url, {headers, params});
    }
    return null;
  }
}

