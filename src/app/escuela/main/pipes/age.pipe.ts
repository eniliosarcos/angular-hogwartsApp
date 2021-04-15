import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  //pipe encargado de calcular la edad de los personajes.
  //resta el año actual con el año de nacimiento del personaje para calcular la edad.
  transform(value: number | string): string {

    //si el valor es un string vacio, regresa un N/A a la tabla
    if(value === ""){
      return "N/A";
    }

    const age = new Date().getFullYear() - Number(value);

    return age.toString();
  }

}
