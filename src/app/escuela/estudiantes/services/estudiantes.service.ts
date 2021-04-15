import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personajes } from '../../main/interfaces/hogwars.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  //declaracion del modulo http para el consumo de la api
  constructor(private http: HttpClient) { }

  // metodo que maneja la informacion de los estudiantes de la escuela
  getEstudiantes(): Observable<Personajes[]> {
    const url = `${environment.apiBase_hogwarts_url}/students`
    return this.http.get<Personajes[]>(url);
  }
}
