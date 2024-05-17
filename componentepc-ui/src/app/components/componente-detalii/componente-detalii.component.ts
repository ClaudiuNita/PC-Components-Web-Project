import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Componente } from '../../models/componente';
import { ComponenteService } from '../../services/componente/componente.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-componente-detalii',
  templateUrl: './componente-detalii.component.html',
  styleUrls: ['./componente-detalii.component.css']
})
export class ComponenteDetaliiComponent implements OnInit {

  componenta!: Componente;

  constructor(private componenteService: ComponenteService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getComponenta();
  }

  getComponenta(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.componenteService.getComponenta(id).subscribe(
      componenta => this.componenta = componenta
    );
  }

  goBack(): void{
    this.location.back();
  }

  updateComponenta(): void {
    this.componenteService.updateComponenta(this.componenta)
      .subscribe(() => this.goBack());
  }

  stergeComponenta(): void{
    this.componenteService.stergeComponenta(this.componenta.id)
      .subscribe(() => this.goBack());
  }

}
