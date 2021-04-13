import { Component, OnInit } from '@angular/core';
import { Personajes } from '../../interfaces/hogwars.interface';
import { EscuelaHogwartsService } from '../../services/escuela-hogwarts.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  
  //arreglo definido para su visualizacion en la tabla
  estudiantes: Personajes[] = [];

  constructor(private escuelaService: EscuelaHogwartsService) { }

  ngOnInit(): void {

    this.cargarEstudiantes();
  }

  //metodo que consulta a la API la informacion de los estudiantes de la escuela y la almacena en el arreglo estudiantes
  cargarEstudiantes(){

    this.escuelaService.estudiantes().subscribe(estudiantes => this.estudiantes = estudiantes)
  }

}