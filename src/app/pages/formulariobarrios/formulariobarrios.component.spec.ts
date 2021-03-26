import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariobarriosComponent } from './formulariobarrios.component';

describe('FormulariobarriosComponent', () => {
  let component: FormulariobarriosComponent;
  let fixture: ComponentFixture<FormulariobarriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariobarriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariobarriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
