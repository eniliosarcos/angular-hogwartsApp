import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscuelaModule } from './escuela/escuela.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //modulo para el consumo de la API
    EscuelaModule, //modulo que maneja todos los componentes de la pagina
    SharedModule //modulo que maneja el sidebar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
