import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { EscuelaRoutingModule } from './escuela-routing.module';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { NuevoEstudianteComponent } from './pages/nuevo-estudiante/nuevo-estudiante.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { EscuelaTablaComponent } from './components/escuela-tabla/escuela-tabla.component';

import { AgePipe } from './pipes/age.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [  
    EstudiantesComponent,
    NuevoEstudianteComponent,
    PersonajesComponent,
    ProfesoresComponent,
    EscuelaTablaComponent,
    AgePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    EscuelaRoutingModule,
    NgxPaginationModule
  ]
})
export class EscuelaModule { }
