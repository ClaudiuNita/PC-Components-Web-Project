import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AcasaComponent } from './acasa/acasa.component';
import { AdaugaComponentaComponent } from './adauga-componenta/adauga-componenta.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteDetaliiComponent } from './componente-detalii/componente-detalii.component';
import { ComponenteComponent } from './componente/componente.component';
import { LoginComponent } from './login/login.component';

import { HttpInterceptorService } from './http-interceptor-service.service';
import { LogoutComponent } from './logout/logout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AcasaComponent,
    ComponenteComponent,
    ComponenteDetaliiComponent,
    AdaugaComponentaComponent,
    LoginComponent,
    LogoutComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
