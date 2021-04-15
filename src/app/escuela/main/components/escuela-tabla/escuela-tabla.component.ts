import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../../interfaces/hogwars.interface';

@Component({
  selector: 'app-escuela-tabla',
  templateUrl: './escuela-tabla.component.html',
  styleUrls: ['./escuela-tabla.component.css']
})
export class EscuelaTablaComponent implements OnInit {
  
  p: number = 1;
  @Input() array: Personajes[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
