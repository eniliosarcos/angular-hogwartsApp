import { Component, OnInit } from '@angular/core';
import { Personajes } from '../../main/interfaces/hogwars.interface';
import { ProfesoresService } from '../services/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  //declaracion del arreglo para su visualizacion en la tabla
  profesores: Personajes[] = [];
  cargarTabla: boolean = false;
  loading: boolean = true;

  constructor(private profesoresService: ProfesoresService) {}

  ngOnInit(): void {

    this.cargarProfesores();
  }

  //metodo para extraer la informacion de los profesores de la escuela 
  cargarProfesores(){

    this.profesoresService.getProfesores()
    .subscribe(resp => {
      this.cargarTabla = true;
      this.loading = false;
      this.profesores = resp
    });
  }

}
