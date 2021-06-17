//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

//SERVICES
import { DataStoreService } from './services/data-store.service';
import { DdbbService } from './services/ddbb.service';
import { XMLService } from './services/xml.service';

//COMPONENTS
import { AppComponent } from './app.component';

import { HeaderComponent } from './views/template/header/header.component';
import { FooterComponent } from './views/template/footer/footer.component';

import { InicioComponent } from './views/inicio/inicio.component';
import { FavoritesComponent } from './views/favorites/favorites.component';

import { XMLButtonComponent } from './components/xml-button/xml-button.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { FiltersComponent } from './components/filters/filters.component';
import { DdbbButtonComponent } from './components/ddbb-button/ddbb-button.component';
import { SearchComponent } from './components/search/search.component';



const appRoutes: Routes = [
  { path: 'favorites', component: FavoritesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' } 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    FavoritesComponent,
    XMLButtonComponent,
    ToolsListComponent,
    FiltersComponent,
    DdbbButtonComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule, 
    NgbModule,
    HttpClientModule
  ],
  providers: [DataStoreService, DdbbService, XMLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
