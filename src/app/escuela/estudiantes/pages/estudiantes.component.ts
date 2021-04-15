import { Component, OnInit } from '@angular/core';
import { Personajes } from '../../main/interfaces/hogwars.interface';
import { EstudiantesService } from '../services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  //arreglo definido para su visualizacion en la tabla
  estudiantes: Personajes[] = [];
  cargarTabla: boolean = false;
  loading: boolean = true;

  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit(): void {

    this.cargarEstudiantes();
  }

  //metodo que consulta a la API la informacion de los estudiantes de la escuela y la almacena en el arreglo estudiantes
  cargarEstudiantes(){

    this.estudiantesService.getEstudiantes()
    .subscribe(estudiantes => {

      this.loading = false;
      this.cargarTabla = true;
      this.estudiantes = estudiantes
    })
  }

}
