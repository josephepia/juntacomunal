import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJuntaComponent } from './formulario-junta.component';

describe('FormularioJuntaComponent', () => {
  let component: FormularioJuntaComponent;
  let fixture: ComponentFixture<FormularioJuntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioJuntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioJuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
