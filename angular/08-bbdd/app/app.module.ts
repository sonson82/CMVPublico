import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { Consulta1Component } from './consulta1/consulta1.component';
// POnemos el Servicio
import { ConsulSer1Service } from './consul-ser1.service';

@NgModule({
  declarations: [
    AppComponent,
    Consulta1Component
  ],
  imports: [
    BrowserModule,
	 HttpClientModule

  ],
  providers: [ConsulSer1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
