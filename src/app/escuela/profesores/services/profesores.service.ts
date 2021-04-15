import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personajes } from '../../main/interfaces/hogwars.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  //declaracion del modulo http para el consumo de la api
  constructor(private http: HttpClient) { }

  //metodo que maneja la informacion de los profesores de la escuela
  getProfesores(): Observable<Personajes[]> {

    const url = `${environment.apiBase_hogwarts_url}/staff`;
    return this.http.get<Personajes[]>(url);
  }
}
