import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDropzoneModule } from 'ngx-dropzone';


import { EscuelaRoutingModule } from './escuela-routing.module';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { NuevoEstudianteComponent } from './pages/nuevo-estudiante/nuevo-estudiante.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { EscuelaTablaComponent } from './components/escuela-tabla/escuela-tabla.component';

import { AgePipe } from './pipes/age.pipe';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [  
    EstudiantesComponent,
    NuevoEstudianteComponent,
    PersonajesComponent,
    ProfesoresComponent,
    EscuelaTablaComponent,
    LoadingComponent,
    AgePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    EscuelaRoutingModule,
    NgxPaginationModule,
    NgxDropzoneModule,

  ]
})
export class EscuelaModule { }
