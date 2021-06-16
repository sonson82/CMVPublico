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

  url1 = "http://www.google.com";
  url2 = "http://www.google.com";
  url3 = "http://www.google.com";

}
