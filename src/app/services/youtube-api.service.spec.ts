import { TestBed } from '@angular/core/testing';

import { YoutubeAPIService } from './youtube-api.service';

describe('YoutubeAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeAPIService = TestBed.get(YoutubeAPIService);
    expect(service).toBeTruthy();
  });
});
