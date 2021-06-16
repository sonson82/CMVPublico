import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { BrowserRefreshService } from './services/browser-refresh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'proyecto-angular';

  constructor(private browserRefreshService:BrowserRefreshService, private router: Router) {}

  ngOnInit(): void {

    
    //If browser refresh we will route to inicio
    if(this.browserRefreshService.getBrowserRefresh()){
      this.router.navigate(['/', 'inicio']);
    }
    
  }
}
