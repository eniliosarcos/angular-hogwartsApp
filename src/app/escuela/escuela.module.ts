import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { PersonajesComponent } from './pages/personajes/personajes.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { EscuelaTablaComponent } from './components/escuela-tabla/escuela-tabla.component';
import { NuevoEstudianteComponent } from './pages/nuevo-estudiante/nuevo-estudiante.component';
import { RouterModule } from '@angular/router';
import { AgePipe } from './pipes/age.pipe';

// este modulo maneja todos los componentes de la pagina

@NgModule({
  declarations: [
    PersonajesComponent, 
    EstudiantesComponent, 
    ProfesoresComponent, 
    NuevoEstudianteComponent,
    EscuelaTablaComponent,
    AgePipe
  ],
  exports:[
    PersonajesComponent, 
    EstudiantesComponent, 
    ProfesoresComponent,
    NuevoEstudianteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class EscuelaModule { }
