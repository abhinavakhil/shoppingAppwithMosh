import { TestBed } from '@angular/core/testing';

import { AuthgaurdService } from './authgaurd.service';

describe('AuthgaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthgaurdService = TestBed.get(AuthgaurdService);
    expect(service).toBeTruthy();
  });
});
