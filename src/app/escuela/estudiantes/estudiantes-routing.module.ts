import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './pages/estudiantes.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '', // ruta para ver a los profesores
        component: EstudiantesComponent
      },
      {
        path: '**', //ruta para guardar un nuevo estudiante
        redirectTo: ''
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
