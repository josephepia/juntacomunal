import { TestBed } from '@angular/core/testing';

import { MiembroJACService } from './miembro-jac.service';

describe('MiembroJACService', () => {
  let service: MiembroJACService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiembroJACService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
