import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntasListComponent } from './juntas-list.component';

describe('JuntasListComponent', () => {
  let component: JuntasListComponent;
  let fixture: ComponentFixture<JuntasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuntasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuntasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
