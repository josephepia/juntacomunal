import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCargoComponent } from './formulario-cargo.component';

describe('FormularioCargoComponent', () => {
  let component: FormularioCargoComponent;
  let fixture: ComponentFixture<FormularioCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
