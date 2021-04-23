import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntaComponent } from './junta.component';

describe('JuntaComponent', () => {
  let component: JuntaComponent;
  let fixture: ComponentFixture<JuntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
