import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../escuela/interfaces/menuItem.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      texto: 'Personajes',
      ruta: './escuela/personajes'
    },
    {
      texto: 'Estudiantes',
      ruta: './escuela/estudiantes'
    },
    {
      texto: 'Profesores',
      ruta: './escuela/profesores'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
