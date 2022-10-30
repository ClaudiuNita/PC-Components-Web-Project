import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adauga-componenta',
  templateUrl: './adauga-componenta.component.html',
  styleUrls: ['./adauga-componenta.component.css']
})
export class AdaugaComponentaComponent implements OnInit {

  componenta: Componente = new Componente();

  constructor(private componenteService: ComponenteService,
              private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  adaugaComponenta(): void {
    this.componenteService.adaugaComponenta(this.componenta)
      .subscribe(() => this.goBack());
  }
}
