import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './pages/personajes.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '', // ruta para ver a los profesores
        component: PersonajesComponent
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
export class PersonajesRoutingModule { }
