import { TestBed, inject } from '@angular/core/testing';

import { GitapiService } from './gitapi.service';

describe('GitapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitapiService]
    });
  });

  it('should be created', inject([GitapiService], (service: GitapiService) => {
    expect(service).toBeTruthy();
  }));
});
