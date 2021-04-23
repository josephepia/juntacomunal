import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosListComponent } from './miembros-list.component';

describe('MiembrosListComponent', () => {
  let component: MiembrosListComponent;
  let fixture: ComponentFixture<MiembrosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiembrosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembrosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
