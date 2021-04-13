import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Personajes } from '../../interfaces/hogwars.interface';

@Component({
  selector: 'app-nuevo-estudiante',
  templateUrl: './nuevo-estudiante.component.html',
  styleUrls: ['./nuevo-estudiante.component.css']
})
export class NuevoEstudianteComponent implements OnInit {

  //declaracion del formulario con sus respectivos campos
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    patronus: [''],
    age: ['', [Validators.min(0),Validators.maxLength(4), Validators.max(new Date().getFullYear())]],
    image: ['']
  })

  //arreglo de los estudiantes a visualizar en la tabla
  nuevosEstudiantes: Personajes[] = [];

  //si existe informacion localmente, la extrae y la guarda en el arreglo para visualizarla
  constructor(private fb: FormBuilder) { 
      this.nuevosEstudiantes = JSON.parse(localStorage.getItem('nuevos-estudiante')!) || [];
  }

  ngOnInit(): void {
  }

  //valida que los campos sean correcto para su gaurdado
  validarCampo(){
    //si el campo nombre tiene un error o fue tocado pero esta vacio, retorna un error.
    return this.miFormulario.controls.nombre.errors && this.miFormulario.controls.nombre.touched;
  }

  //metodo llamado por el boton para agregar un nuevo estudiante
  guardar(){

    //si el formulario es invalido, marca todos los campos como tocados para lanzar los mensajes de error
    if(this.miFormulario.invalid){
      return this.miFormulario.markAllAsTouched();
    }

    //se guarda cada valor en el arreglo por los datos ingresados.
    this.nuevosEstudiantes.push({
      name: this.miFormulario.get('nombre')?.value,
      patronus: this.miFormulario.get('patronus')?.value,
      yearOfBirth: this.miFormulario.get('age')?.value,
      image: this.miFormulario.get('image')?.value ? this.miFormulario.get('image')?.value : 'https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg'
    })

    //guarda los datos localmente
    localStorage.setItem('nuevos-estudiante', JSON.stringify(this.nuevosEstudiantes));

    //reinicia el formulario luego del guardado
    this.miFormulario.reset();
  }

}
