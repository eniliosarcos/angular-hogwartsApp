import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Personajes } from '../../main/interfaces/hogwars.interface';
import { NotificationsService } from '../services/notifications.service';
import { NuevoEstudianteService } from '../services/nuevo-estudiante.service';

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
    age: ['', [Validators.min(0),Validators.maxLength(4), Validators.max(new Date().getFullYear())]]
  })

  files: File[] = [];

  //arreglo de los estudiantes a visualizar en la tabla
  nuevosEstudiantes: Personajes[] = [];
  subject: string = '';
  loadingButton: boolean = false;

  //si existe informacion localmente, la extrae y la guarda en el arreglo para visualizarla
  constructor(private fb: FormBuilder,
              private nuevoEstudianteService: NuevoEstudianteService,
              private notificationsService:NotificationsService){ 

      this.nuevosEstudiantes = JSON.parse(localStorage.getItem('nuevos-estudiantes')!) || [];
  }

  ngOnInit(): void {
  }

  onSelect(event:any) {
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  //valida que los campos sean correcto para su gaurdado
  validarCampo(){
    //si el campo nombre tiene un error o fue tocado pero esta vacio, retorna un error.
    return this.miFormulario.controls.nombre.errors && this.miFormulario.controls.nombre.touched;
  }

  //metodo llamado por el boton para agregar un nuevo estudiante
  async guardar(){
    
    let response;
    this.loadingButton = true;
    

    if(this.files[0]){

      const file_data = this.files[0];
      const data = new FormData();
      data.append('file',file_data);
      data.append('upload_preset','rxsytvq6');
      data.append('cloud_name', 'ejspdev');
      response = await this.nuevoEstudianteService.upload(data).toPromise();
    }
    
    //si el formulario es invalido, marca todos los campos como tocados para lanzar los mensajes de error
    if(this.miFormulario.invalid){

      return this.miFormulario.markAllAsTouched();
    }
    //se guarda cada valor en el arreglo por los datos ingresados.
    this.nuevosEstudiantes.push({
      
      name: this.miFormulario.get('nombre')?.value,
      patronus: this.miFormulario.get('patronus')?.value,
      yearOfBirth: this.miFormulario.get('age')?.value,
      image: this.files[0] ?  response.secure_url : 'https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg'
    })

    //guarda los datos localmente
    localStorage.setItem('nuevos-estudiantes', JSON.stringify(this.nuevosEstudiantes));

    //reinicia el formulario luego del guardado
    this.loadingButton = false;
    this.notificationsService.showSuccess('El nuevo estudiante fue agregado a la lista','Exito!');
    this.miFormulario.reset();
    this.files=[];
  }

}
