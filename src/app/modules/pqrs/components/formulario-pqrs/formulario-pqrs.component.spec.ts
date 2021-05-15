import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPQRSComponent } from './formulario-pqrs.component';

describe('FormularioPQRSComponent', () => {
  let component: FormularioPQRSComponent;
  let fixture: ComponentFixture<FormularioPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPQRSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
