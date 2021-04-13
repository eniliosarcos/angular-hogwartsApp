import { Component, OnInit } from '@angular/core';
import { EscuelaHogwartsService } from '../../services/escuela-hogwarts.service';
import { Personajes } from '../../interfaces/hogwars.interface';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  //declaracion del arreglo para su visualizacion en la tabla
  profesores: Personajes[] = [];

  constructor(private escuelaService: EscuelaHogwartsService) {}

  ngOnInit(): void {

    this.cargarProfesores();
  }

  //metodo para extraer la informacion de los profesores de la escuela 
  cargarProfesores(){

    this.escuelaService.profesores().subscribe(resp => this.profesores = resp);
  }

}
