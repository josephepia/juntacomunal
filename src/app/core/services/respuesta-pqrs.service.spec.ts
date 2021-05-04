import { TestBed } from '@angular/core/testing';

import { RespuestaPQRSService } from './respuesta-pqrs.service';

describe('RespuestaPQRSService', () => {
  let service: RespuestaPQRSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespuestaPQRSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
