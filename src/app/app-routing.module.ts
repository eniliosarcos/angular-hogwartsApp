import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstudiantesComponent } from './escuela/pages/estudiantes/estudiantes.component';
import { NuevoEstudianteComponent } from './escuela/pages/nuevo-estudiante/nuevo-estudiante.component';
import { PersonajesComponent } from './escuela/pages/personajes/personajes.component';
import { ProfesoresComponent } from './escuela/pages/profesores/profesores.component';


// Rutas de la pagina

const routes: Routes = [
  {
    path: '', // ruta base
    component: PersonajesComponent,
    pathMatch: 'full'
  },
  {
    path: 'estudiantes', // ruta para ver a los estudiantes 
    component: EstudiantesComponent,
  },
  {
    path: 'profesores', // ruta para ver a los profesores
    component: ProfesoresComponent
  },
  {
    path: 'nuevo-estudiante', //ruta para guardar un nuevo estudiante
    component: NuevoEstudianteComponent
  },
  {
    path: '**',
    redirectTo: '' // redirecciona a la ruta base si la ruta establecida no existe
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
