import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJacComponent } from './formulario-jac.component';

describe('FormularioJacComponent', () => {
  let component: FormularioJacComponent;
  let fixture: ComponentFixture<FormularioJacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioJacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioJacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
