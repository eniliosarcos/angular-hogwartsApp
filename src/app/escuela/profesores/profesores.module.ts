import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './pages/profesores.component';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [ProfesoresComponent],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    MainModule
  ]
})
export class ProfesoresModule { }
