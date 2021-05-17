import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasAtencionListComponent } from './lineas-atencion-list.component';

describe('LineasAtencionListComponent', () => {
  let component: LineasAtencionListComponent;
  let fixture: ComponentFixture<LineasAtencionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineasAtencionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasAtencionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
