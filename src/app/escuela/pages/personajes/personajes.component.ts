import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators'
import { EscuelaHogwartsService } from '../../services/escuela-hogwarts.service';
import { Personajes } from '../../interfaces/hogwars.interface';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  //declaracion del formulario reactivo para hacer uso del select 
  miFormulario: FormGroup = this.fb.group({
    casa: ['', Validators.required]
  })

  //variable que maneja las casas de hechiceria de la escuela. Esto sera reflejado en el select
  casa: string[] = ["Slytherin", "Gryffindor", "Ravenclaw", "Hufflepuff"];

  //declaracion del arreglo para visualizarlo en la tabla
  personajes: Personajes[] = [];
  cargarTabla: boolean = false;

  //declaracion del formbuilder y el servicio que consume la API
  constructor(private fb: FormBuilder,
              private escuelaService: EscuelaHogwartsService) { }

  ngOnInit(): void {

    this.cargarPersonajes();
  }

  //metodo que verifica si el select recibio un cambio y extrae la informacion de los personajes por la casa seleccionada
  cargarPersonajes(){

    this.miFormulario.get('casa')?.valueChanges
    .pipe(
      //reinicia el arreglo cada vez que hay un cambio
      tap((_) => {
        this.personajes = [];
        this.cargarTabla = false;
      }),
      //extrae la informacion de los personajes
      switchMap( casa => this.escuelaService.personajes(casa)),
    )
    // la informacion extraida es guardada en el arreglo para visualizarla en la tabla
    .subscribe( personajes => {

      if(personajes != null){

        this.personajes = personajes!;
        this.cargarTabla = true;
      } 
    });
  }

}
