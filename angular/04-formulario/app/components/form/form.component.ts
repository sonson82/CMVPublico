import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Validaciones from './validaciones';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'FORMULARIO REACTIVO';
  form:FormGroup;

  constructor(private fctrl:FormBuilder) {

    this.form=fctrl.group({ 

      code:['',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
     
      ])],
     
      name:['',Validators.compose([
        Validators.required,
        Validators.minLength(2)
     
      ])],

      phone:['',Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validaciones.validatePhone
      ])],

    })
  }



  onSubmit() {
  
    console.log("codigo . " + this.form.controls['code'].value);
    console.log("nombre . " + this.form.controls['name'].value);
    console.log("teléfono . " + this.form.controls['phone'].value);
    console.log(JSON.stringify(this.form.value));

  }

  ngOnInit(): void {
  }

}
