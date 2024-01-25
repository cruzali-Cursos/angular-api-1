import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/character/1,183`);
  }

  // Se retorna un OBJETO, NO un array
  // Extraer el array de characters...
  public getAllCharacters(): Observable<any[]> {
    return this.http.get<any>(`${this.urlApi}/character`)
    .pipe(map(response => response.results));
  }

}
