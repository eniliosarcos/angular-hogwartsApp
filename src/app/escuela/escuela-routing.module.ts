import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { NuevoEstudianteComponent } from './pages/nuevo-estudiante/nuevo-estudiante.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'personajes', // ruta base
        component: PersonajesComponent,
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
        path: '**', //ruta para guardar un nuevo estudiante
        redirectTo: 'personajes'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EscuelaRoutingModule { }
