import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Componente } from './componente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
  private getComponenteURL: string = '/componente_backend/getComponente';
  private getComponentaURL: string = '/componente_backend/getComponenta';
  private putComponentaURL: string = '/componente_backend/putComponenta';
  private deleteComponentaURL: string = '/componente_backend/deleteComponenta';
  private adaugaComponentaURL: string ='/componente_backend/postComponenta';

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
}
