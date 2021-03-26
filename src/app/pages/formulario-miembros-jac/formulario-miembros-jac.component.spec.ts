import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMiembrosJACComponent } from './formulario-miembros-jac.component';

describe('FormularioMiembrosJACComponent', () => {
  let component: FormularioMiembrosJACComponent;
  let fixture: ComponentFixture<FormularioMiembrosJACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMiembrosJACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMiembrosJACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
