import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInvitadoComponent } from './menu-invitado.component';

describe('MenuInvitadoComponent', () => {
  let component: MenuInvitadoComponent;
  let fixture: ComponentFixture<MenuInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
