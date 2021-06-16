//MÓDULOS:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES:
import { AppComponent } from './app.component';

import { InicioComponent } from './views/inicio/inicio.component';
import { Pagina1Component } from './views/pagina1/pagina1.component';
import { HeaderComponent } from './views/template/header/header.component';
import { FooterComponent } from './views/template/footer/footer.component';
import { NavComponent } from './views/template/nav/nav.component';
import { FactorialPipe } from './pipes/factorial.pipe';
import { SumatorioPipe } from './pipes/sumatorio.pipe';
import { CuboPipe } from './pipes/cubo.pipe';
import { CuadradoPipe } from './pipes/cuadrado.pipe';



const appRoutes: Routes = [
  { path: 'pagina1', component: Pagina1Component },
  { path: 'inicio', component: InicioComponent }, 
  { path: '', redirectTo: '/inicio', pathMatch: 'full' } 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    InicioComponent,
    Pagina1Component,
    FactorialPipe,
    SumatorioPipe,
    CuboPipe,
    CuadradoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


