import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocomunasComponent } from './formulariocomunas.component';

describe('FormulariocomunasComponent', () => {
  let component: FormulariocomunasComponent;
  let fixture: ComponentFixture<FormulariocomunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariocomunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariocomunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
