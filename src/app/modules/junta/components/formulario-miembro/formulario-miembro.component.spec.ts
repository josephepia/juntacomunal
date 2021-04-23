import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMiembroComponent } from './formulario-miembro.component';

describe('FormularioMiembroComponent', () => {
  let component: FormularioMiembroComponent;
  let fixture: ComponentFixture<FormularioMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMiembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
