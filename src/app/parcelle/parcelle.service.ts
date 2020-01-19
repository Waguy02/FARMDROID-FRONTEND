import { Parcelle } from './parcelle';
import { ParcelleFilter } from './parcelle-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class ParcelleService {
  parcelleList: Parcelle[] = [];
  api = 'http://localhost:5000/api/parcelle';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Parcelle> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Parcelle>(url, {params, headers});
  }

  load(filter: ParcelleFilter): void {
    this.find(filter).subscribe(result => {
        this.parcelleList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  findFilter(filter: ParcelleFilter , fullMatch:boolean=false){
    if(filter==null)return this.find(new ParcelleFilter());
    return this.find(new ParcelleFilter())
   .pipe(
     tap((parcelles:Parcelle[]) => {
       var foundCapteurs=parcelles
         .map((parcelle) => {var current:Parcelle=new Parcelle();Object.assign(current,parcelle);;  return current})
         .filter(parcelle =>  ( parcelle.espece.name.toLowerCase().includes(filter.espece.toLowerCase())||parcelle.location==filter.location));
      
         parcelles.splice(0,parcelles.length);
         for(var parcelle of foundCapteurs){
           parcelles.push(parcelle);
           
         }
         this.parcelleList  
     })
     );
 }
















  find(filter: ParcelleFilter): Observable<Parcelle[]> {
    const params = {
      'espece': filter.espece,
    };

    return this.http.get<Parcelle[]>(this.api, {params, headers});
  }

  save(entity: Parcelle): Observable<Parcelle> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Parcelle>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Parcelle>(url, entity, {headers, params});
    }
  }

  delete(entity: Parcelle): Observable<Parcelle> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Parcelle>(url, {headers, params});
    }
    return null;
  }
}

