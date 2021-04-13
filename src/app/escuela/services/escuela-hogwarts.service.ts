import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Personajes } from '../interfaces/hogwars.interface';

@Injectable({
  providedIn: 'root'
})
export class EscuelaHogwartsService {

  //URL base de la api a consumir
  private apiUrl: string = 'http://hp-api.herokuapp.com/api/characters'

  //declaracion del modulo http para el consumo de la api
  constructor(private http: HttpClient) { }

  //metodo que maneja la informacion de los profesores de la escuela
  profesores(): Observable<Personajes[]> {

    const url = `${this.apiUrl}/staff`;
    return this.http.get<Personajes[]>(url);
  }

  //metodo que maneja la informacion de los personajes de la escuela
  personajes(casa: string): Observable<Personajes[] | null>{

    //si la casa es nula, retorna un observable null. Esto para evitar problemas con el select
    if(!casa){
      return of(null)
    }
    
    const url = `${this.apiUrl}/house/${casa}`;
    return this.http.get<Personajes[]>(url);
  }

  // metodo que maneja la informacion de los estudiantes de la escuela
  estudiantes(): Observable<Personajes[]> {
    const url = `${this.apiUrl}/students`
    return this.http.get<Personajes[]>(url);
  }
}
