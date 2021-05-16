import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitantesListComponent } from './habitantes-list.component';

describe('HabitantesListComponent', () => {
  let component: HabitantesListComponent;
  let fixture: ComponentFixture<HabitantesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitantesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitantesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
