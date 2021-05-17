import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasAtencionComponent } from './lineas-atencion.component';

describe('LineasAtencionComponent', () => {
  let component: LineasAtencionComponent;
  let fixture: ComponentFixture<LineasAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineasAtencionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
