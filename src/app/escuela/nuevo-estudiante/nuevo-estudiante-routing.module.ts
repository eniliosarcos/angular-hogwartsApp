import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoEstudianteComponent } from './pages/nuevo-estudiante.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '', // ruta para ver a los profesores
        component: NuevoEstudianteComponent
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
export class NuevoEstudianteRoutingModule { }
