import { TestBed } from '@angular/core/testing';

import { ComunaService } from './comuna.service';

describe('ComunaService', () => {
  let service: ComunaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
