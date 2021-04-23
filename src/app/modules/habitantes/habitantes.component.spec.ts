import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitantesComponent } from './habitantes.component';

describe('HabitantesComponent', () => {
  let component: HabitantesComponent;
  let fixture: ComponentFixture<HabitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
