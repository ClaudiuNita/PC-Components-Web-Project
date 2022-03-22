import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcasaComponent } from './acasa/acasa.component';
import { ComponenteComponent } from './componente/componente.component';
import { ComponenteDetaliiComponent } from './componente-detalii/componente-detalii.component';
import { AdaugaComponentaComponent } from './adauga-componenta/adauga-componenta.component';

@NgModule({
  declarations: [
    AppComponent,
    AcasaComponent,
    ComponenteComponent,
    ComponenteDetaliiComponent,
    AdaugaComponentaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
