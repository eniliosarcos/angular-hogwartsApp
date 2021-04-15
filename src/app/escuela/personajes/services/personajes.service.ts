import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Personajes } from '../../main/interfaces/hogwars.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  //declaracion del modulo http para el consumo de la api
  constructor(private http: HttpClient) { }

  //metodo que maneja la informacion de los personajes de la escuela
  getPersonajes(casa: string): Observable<Personajes[] | null>{

    //si la casa es nula, retorna un observable null. Esto para evitar problemas con el select
    if(!casa){
      return of(null)
    }
    
    const url = `${environment.apiBase_hogwarts_url}/house/${casa}`;
    return this.http.get<Personajes[]>(url);
  }
}
