import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDetaliiComponent } from './componente-detalii.component';

describe('ComponenteDetaliiComponent', () => {
  let component: ComponenteDetaliiComponent;
  let fixture: ComponentFixture<ComponenteDetaliiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDetaliiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDetaliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
