import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(num1:number): string {
  	var factorial = 1;
	for (var i = 1; i <= num1; i++) {
		factorial *= i;
	}
    return "El factorial de " + num1 + " es " + factorial;
  }
}
