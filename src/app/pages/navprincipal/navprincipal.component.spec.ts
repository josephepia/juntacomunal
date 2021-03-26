import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavprincipalComponent } from './navprincipal.component';

describe('NavprincipalComponent', () => {
  let component: NavprincipalComponent;
  let fixture: ComponentFixture<NavprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
