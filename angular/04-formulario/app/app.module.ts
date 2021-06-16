//MÓDULOS:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES:
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';

import { Bloque1Component } from './components/bloque1/bloque1.component';
import { Bloque2Component } from './components/bloque2/bloque2.component';
import { Bloque3Component } from './components/bloque3/bloque3.component';
import { Bloque4Component } from './components/bloque4/bloque4.component';

import { InicioComponent } from './views/inicio/inicio.component';
import { Pagina1Component } from './views/pagina1/pagina1.component';
import { Pagina2Component } from './views/pagina2/pagina2.component';
import { Pagina3Component } from './views/pagina3/pagina3.component';
import { FormComponent } from './components/form/form.component';


const appRoutes: Routes = [
  // Sintaxis: { path: 'Nombre_Ruta', component: Nombre_Componente }
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component },
  { path: 'inicio', component: InicioComponent }, // Componente para mi página de INICIO:
  { path: '', redirectTo: '/inicio', pathMatch: 'full' } // Con REDIRECT para página de Inicio de la Aplicación
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    Bloque1Component,
    Bloque2Component,
    Bloque3Component,
    Bloque4Component,
    InicioComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    FormComponent,

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


