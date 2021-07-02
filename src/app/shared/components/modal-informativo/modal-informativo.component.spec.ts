import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformativoComponent } from './modal-informativo.component';

describe('ModalInformativoComponent', () => {
  let component: ModalInformativoComponent;
  let fixture: ComponentFixture<ModalInformativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInformativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
