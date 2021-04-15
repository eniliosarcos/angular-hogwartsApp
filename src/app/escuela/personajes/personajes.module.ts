import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './pages/personajes.component';
import { MainModule } from '../main/main.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PersonajesComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    ReactiveFormsModule,
    MainModule
  ]
})
export class PersonajesModule { }
