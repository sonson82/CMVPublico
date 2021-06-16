import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuadrado'
})
export class CuadradoPipe implements PipeTransform {

  transform(num5: number, num6: number): string {
  	var menor = 0;
  	if (num5 < num6) {
  		menor = num5;
  	} else {
  		menor = num6;
  	}
  	var cuadrado = menor * menor;
    return "El cuadrado de " + menor + " es " + cuadrado;
  }

}
