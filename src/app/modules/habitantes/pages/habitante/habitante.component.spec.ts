import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitanteComponent } from './habitante.component';

describe('HabitanteComponent', () => {
  let component: HabitanteComponent;
  let fixture: ComponentFixture<HabitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
