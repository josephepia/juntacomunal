import { TestBed } from '@angular/core/testing';

import { RolesPermisosService } from './roles-permisos.service';

describe('RolesPermisosService', () => {
  let service: RolesPermisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesPermisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
