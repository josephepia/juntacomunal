import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosJACComponent } from './miembros-jac.component';

describe('MiembrosJACComponent', () => {
  let component: MiembrosJACComponent;
  let fixture: ComponentFixture<MiembrosJACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiembrosJACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembrosJACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
