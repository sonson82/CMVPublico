import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'EJECICIO 02 - ANGULAR: directivas';

  constructor() { }

  ngOnInit(): void {
  }

}
