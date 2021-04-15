import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoEstudianteRoutingModule } from './nuevo-estudiante-routing.module';
import { NuevoEstudianteComponent } from './pages/nuevo-estudiante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MainModule } from '../main/main.module';


@NgModule({
  declarations: [NuevoEstudianteComponent],
  imports: [
    CommonModule,
    NuevoEstudianteRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MainModule
  ]
})
export class NuevoEstudianteModule { }
