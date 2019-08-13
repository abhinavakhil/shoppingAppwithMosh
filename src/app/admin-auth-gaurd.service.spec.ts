import { TestBed } from '@angular/core/testing';

import { AdminAuthGaurdService } from './admin-auth-gaurd.service';

describe('AdminAuthGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthGaurdService = TestBed.get(AdminAuthGaurdService);
    expect(service).toBeTruthy();
  });
});
