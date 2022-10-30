import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaComponentaComponent } from './adauga-componenta.component';

describe('AdaugaComponentaComponent', () => {
  let component: AdaugaComponentaComponent;
  let fixture: ComponentFixture<AdaugaComponentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaugaComponentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaComponentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
