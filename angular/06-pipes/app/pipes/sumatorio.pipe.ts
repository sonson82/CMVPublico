import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumatorio'
})
export class SumatorioPipe implements PipeTransform {

  transform(num2: number): string {
    var sumatorio = 0;
	for (var i = 1; i <= num2; i++) {
		sumatorio += i;
	}
    return "El sumatorio de " + num2 + " es " + sumatorio;
  }
}
