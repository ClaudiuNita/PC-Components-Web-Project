import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from './acasa/acasa.component';
import { AdaugaComponentaComponent } from './adauga-componenta/adauga-componenta.component';
import { ComponenteDetaliiComponent } from './componente-detalii/componente-detalii.component';
import { ComponenteComponent } from './componente/componente.component';

const routes: Routes = [
  {path: '', component: AcasaComponent},
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
