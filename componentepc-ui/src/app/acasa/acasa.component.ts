import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-acasa',
  templateUrl: './acasa.component.html',
  styleUrls: ['./acasa.component.css']
})
export class AcasaComponent implements OnInit {

  componente: Componente[] = [];

  constructor(private componenteService: ComponenteService) { }

  ngOnInit(): void {
    this.topComponente();
  }

  topComponente(): void {
    this.componenteService.getComponente()
      .subscribe(componente => {
        componente.sort((a,b) => (a.pret>b.pret)? -1: 1);
        this.componente = componente.slice(0, 3);
      });
  }

}
