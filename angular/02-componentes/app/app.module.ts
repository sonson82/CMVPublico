//MÓDULOS:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//COMPONENTES:
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Bloque1Component } from './bloque1/bloque1.component';
import { Bloque2Component } from './bloque2/bloque2.component';
import { Bloque3Component } from './bloque3/bloque3.component';
import { Bloque4Component } from './bloque4/bloque4.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Bloque1Component,
    Bloque2Component,
    Bloque3Component,
    Bloque4Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
