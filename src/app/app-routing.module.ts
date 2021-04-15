import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


// Rutas de la pagina

const routes: Routes = [
  {
    path: 'page/profesores',
    loadChildren: () => import('./escuela/profesores/profesores.module').then(m => m.ProfesoresModule)
  },
  {
    path: 'page/estudiantes',
    loadChildren: () => import('./escuela/estudiantes/estudiantes.module').then(m => m.EstudiantesModule)
  },
  {
    path: 'page/nuevo-estudiante',
    loadChildren: () => import('./escuela/nuevo-estudiante/nuevo-estudiante.module').then(m => m.NuevoEstudianteModule)
  },
  {
    path: 'page/personajes',
    loadChildren: () => import('./escuela/personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: '**',
    redirectTo: 'page/personajes' // redirecciona a la ruta base si la ruta establecida no existe
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
