import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasolicitudhabitantesComponent } from './consultasolicitudhabitantes.component';

describe('ConsultasolicitudhabitantesComponent', () => {
  let component: ConsultasolicitudhabitantesComponent;
  let fixture: ComponentFixture<ConsultasolicitudhabitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasolicitudhabitantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasolicitudhabitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
