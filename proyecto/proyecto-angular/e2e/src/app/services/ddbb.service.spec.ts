import { TestBed } from '@angular/core/testing';

import { DdbbService } from './ddbb.service';

describe('DdbbService', () => {
  let service: DdbbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdbbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
