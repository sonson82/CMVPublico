import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cubo'
})
export class CuboPipe implements PipeTransform {

  transform(num3: number, num4: number): string {
  	var mayor = 0;
  	if (num3 > num4) {
  		mayor = num3;
  	} else {
  		mayor = num4;
  	}
  	var cubo = mayor * mayor * mayor;
    return "El cubo de " + mayor + " es " + cubo;
  }
}
