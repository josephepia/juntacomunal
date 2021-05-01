import { TestBed } from '@angular/core/testing';

import { PQRSService } from './pqrs.service';

describe('PQRSService', () => {
  let service: PQRSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PQRSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
