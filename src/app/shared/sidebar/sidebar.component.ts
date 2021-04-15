import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../escuela/main/interfaces/menuItem.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      texto: 'Personajes',
      ruta: './page/personajes'
    },
    {
      texto: 'Estudiantes',
      ruta: './page/estudiantes'
    },
    {
      texto: 'Profesores',
      ruta: './page/profesores'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
