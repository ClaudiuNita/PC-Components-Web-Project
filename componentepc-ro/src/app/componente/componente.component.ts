import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {

  componente: Componente[] = [];

  constructor(private componenteService: ComponenteService) { }

  getComponente(): void {
    this.componenteService.getComponente().subscribe(
      
      componente => this.componente = componente
      
    );
  }

  ngOnInit(): void {
    this.getComponente();
  }

}
