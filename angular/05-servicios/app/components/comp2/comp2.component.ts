import { Component, OnInit } from '@angular/core';

import { FechaService } from '../../services/fecha.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  title = "COMPONENTE 2 : fechas";
  constructor(private fechaService:FechaService) { }

  ngOnInit(): void {


    this.fechaService.getFecha()
    .then(
      pedido => {

        for (const item of pedido) {
          let fecha = item.date;
          console.log(fecha.getDate() + "-" + fecha.getMonth() + "-" + fecha.getFullYear())
        }

    })

  }

}
