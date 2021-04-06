import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRegistroHabitantesComponent } from './solicitud-registro-habitantes.component';

describe('SolicitudRegistroHabitantesComponent', () => {
  let component: SolicitudRegistroHabitantesComponent;
  let fixture: ComponentFixture<SolicitudRegistroHabitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudRegistroHabitantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudRegistroHabitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
