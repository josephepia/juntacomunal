import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunaComponent } from './comuna.component';

describe('ComunaComponent', () => {
  let component: ComunaComponent;
  let fixture: ComponentFixture<ComunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
