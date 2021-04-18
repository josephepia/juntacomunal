import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBarriosComponent } from './formulario-barrios.component';

describe('FormularioBarriosComponent', () => {
  let component: FormularioBarriosComponent;
  let fixture: ComponentFixture<FormularioBarriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBarriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioBarriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
