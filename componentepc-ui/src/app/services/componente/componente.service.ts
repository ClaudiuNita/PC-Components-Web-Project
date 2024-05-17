import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Componente } from '../../models/componente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
  private baseURL = '/componente-backend';
  private getComponenteURL: string = `${this.baseURL}/componente`;
  private getComponentaURL: string = `${this.baseURL}/componenta`;
  private putComponentaURL: string = `${this.baseURL}/update`;
  private deleteComponentaURL: string = `${this.baseURL}/delete`;
  private adaugaComponentaURL: string =`${this.baseURL}/add`;
  private logoutURL: string = 'http://localhost:9090/logout';

  constructor(private http: HttpClient) { }

  getComponente(): Observable<Componente[]> {
    return this.http.get<Componente[]>(this.getComponenteURL);
  }

  getComponenta(id: number): Observable<Componente> {
    const url = `${this.getComponentaURL}/${id}`;
    return this.http.get<Componente>(url);
  }

  updateComponenta(componenta: Componente): Observable<Componente>{
    return this.http.put<Componente>(this.putComponentaURL, componenta, httpOptions);
  }

  stergeComponenta(id: number): Observable<Componente>{
    const url = `${this.deleteComponentaURL}/${id}`;
    return this.http.delete<Componente>(url);
  }

  adaugaComponenta(componenta: Componente): Observable<Componente>{
    return this.http.post<Componente>(this.adaugaComponentaURL, componenta);
  }

  logout(): Observable<any> {
    return this.http.get(this.logoutURL);
  }
}
