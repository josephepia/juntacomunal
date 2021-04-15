import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComunaComponent } from './formulario-comuna.component';

describe('FormularioComunaComponent', () => {
  let component: FormularioComunaComponent;
  let fixture: ComponentFixture<FormularioComunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
