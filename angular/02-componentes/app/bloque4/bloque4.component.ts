import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque4',
  templateUrl: './bloque4.component.html',
  styleUrls: ['./bloque4.component.css']
})
export class Bloque4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Bloque 4';
  titleA   = 'Style - ngStyle';

  hayLetraGrande:boolean  = false;
  hayColorFondo:boolean  = false;
  hayLetraColor:boolean  = false;
  hayLetraItalica:boolean  = false;
  hayBorde:boolean= false;

  defineEstilos(){
      let styles= {
          'font-size': this.hayLetraGrande ? '300%' : 'initial',
          'background-color': this.hayColorFondo ? '#58FA58' : '#FFFFFF',
          'color': this.hayLetraColor ? 'red' : 'black',
          'font-style': this.hayLetraItalica ? 'italic' : 'normal',
          'border': this.hayBorde ? '5px solid blue' : 'none' 
      };
      return styles;
  }

  option:string = "";
  cambEstilos() {
    if(this.option == "1") {
      var styles = { "color": "red" }
      return styles;
    }
    if(this.option == "2") {
      var styles = { "color": "blue" }
      return styles;
    }
    if(this.option == "3") {
      var styles = { "color": "white" }
      return styles;
    }
    
  }


}
