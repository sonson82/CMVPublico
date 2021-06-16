import {AbstractControl } from '@angular/forms';

export default class Validaciones{
    
    static validatePhone(caracter:AbstractControl){

        let regexp: RegExp = /^[0-9]{0,9}$/;

        if (!regexp.test(caracter.value)) {
            return {validatePhone: true};
        }

        return null;
    }
}