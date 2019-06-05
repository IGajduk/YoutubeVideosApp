import { TestBed } from '@angular/core/testing';

import { BeyApiService } from './bey-api.service';

describe('BeyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeyApiService = TestBed.get(BeyApiService);
    expect(service).toBeTruthy();
  });
});
