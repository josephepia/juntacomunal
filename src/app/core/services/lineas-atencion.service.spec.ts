import { TestBed } from '@angular/core/testing';

import { LineasAtencionService } from './lineas-atencion.service';

describe('LineasAtencionService', () => {
  let service: LineasAtencionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineasAtencionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
