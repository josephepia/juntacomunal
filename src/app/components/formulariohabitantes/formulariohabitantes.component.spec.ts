import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariohabitantesComponent } from './formulariohabitantes.component';

describe('FormulariohabitantesComponent', () => {
  let component: FormulariohabitantesComponent;
  let fixture: ComponentFixture<FormulariohabitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariohabitantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariohabitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
