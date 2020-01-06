import { PlanCapteur } from './plan-capteur';
import { PlanCapteurFilter } from './plan-capteur-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class PlanCapteurService {
  planCapteurList: PlanCapteur[] = [];
  api = 'http://localhost:5000/api/plancapteur';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<PlanCapteur> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<PlanCapteur>(url, {params, headers});
  }

  load(filter: PlanCapteurFilter): void {
    this.find(filter).subscribe(result => {
        this.planCapteurList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: PlanCapteurFilter): Observable<PlanCapteur[]> {
    const params = {
    };

    return this.http.get<PlanCapteur[]>(this.api, {params, headers});
  }

  save(entity: PlanCapteur): Observable<PlanCapteur> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<PlanCapteur>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<PlanCapteur>(url, entity, {headers, params});
    }
  }

  delete(entity: PlanCapteur): Observable<PlanCapteur> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<PlanCapteur>(url, {headers, params});
    }
    return null;
  }
}

