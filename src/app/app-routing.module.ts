import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Rutas de la pagina

const routes: Routes = [
  {
    path: 'escuela',
    loadChildren: () => import('./escuela/escuela.module').then(m => m.EscuelaModule)
  },
  {
    path: '**',
    redirectTo: 'escuela' // redirecciona a la ruta base si la ruta establecida no existe
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
