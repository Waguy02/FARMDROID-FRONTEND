import { Mesure } from './mesure';
import { MesureFilter } from './mesure-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class MesureService {
  mesureList: Mesure[] = [];
  api = 'http://localhost:5000/api/mesure';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Mesure> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Mesure>(url, {params, headers});
  }

  load(filter: MesureFilter): void {
    this.find(filter).subscribe(result => {
        this.mesureList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: MesureFilter): Observable<Mesure[]> {
    const params = {
    };

    return this.http.get<Mesure[]>(this.api, {params, headers});
  }

  save(entity: Mesure): Observable<Mesure> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Mesure>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Mesure>(url, entity, {headers, params});
    }
  }

  delete(entity: Mesure): Observable<Mesure> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Mesure>(url, {headers, params});
    }
    return null;
  }
}

