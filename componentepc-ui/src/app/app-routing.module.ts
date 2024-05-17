import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from './components/acasa/acasa.component';
import { AdaugaComponentaComponent } from './components/adauga-componenta/adauga-componenta.component';
import { ComponenteDetaliiComponent } from './components/componente-detalii/componente-detalii.component';
import { ComponenteComponent } from './components/componente/componente.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path: '', component: AcasaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'acasa', component: AcasaComponent},
  {path: 'componente', component: ComponenteComponent},
  {path: 'detalii/:id', component: ComponenteDetaliiComponent},
  {path: 'adaugaComponenta', component: AdaugaComponentaComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
