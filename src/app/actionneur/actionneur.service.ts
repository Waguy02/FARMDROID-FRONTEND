import { Actionneur } from './actionneur';
import { ActionneurFilter } from './actionneur-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class ActionneurService {
  actionneurList: Actionneur[] = [];
  api = 'http://localhost:5000/api/actionneur';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Actionneur> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Actionneur>(url, {params, headers});
  }

  load(filter: ActionneurFilter): void {
    this.find(filter).subscribe(result => {
        this.actionneurList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: ActionneurFilter): Observable<Actionneur[]> {
    const params = {
    };

    return this.http.get<Actionneur[]>(this.api, {params, headers});
  }

  save(entity: Actionneur): Observable<Actionneur> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Actionneur>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Actionneur>(url, entity, {headers, params});
    }
  }

  delete(entity: Actionneur): Observable<Actionneur> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Actionneur>(url, {headers, params});
    }
    return null;
  }
}

