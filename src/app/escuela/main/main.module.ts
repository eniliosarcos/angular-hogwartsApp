import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { EscuelaTablaComponent } from '../main/components/escuela-tabla/escuela-tabla.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AgePipe } from './pipes/age.pipe';


@NgModule({
  declarations: [
    EscuelaTablaComponent,
    LoadingComponent,
    AgePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    EscuelaTablaComponent,
    LoadingComponent,
    AgePipe
  ]
})
export class MainModule { }
