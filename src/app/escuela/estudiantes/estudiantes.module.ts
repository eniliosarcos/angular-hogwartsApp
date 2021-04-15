import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './pages/estudiantes.component';
import { MainModule } from '../main/main.module';


@NgModule({
  declarations: [EstudiantesComponent],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    MainModule
  ]
})
export class EstudiantesModule { }
