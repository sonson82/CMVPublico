import { TestBed } from '@angular/core/testing';

import { ConsulSer1Service } from './consul-ser1.service';

describe('ConsulSer1Service', () => {
  let service: ConsulSer1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsulSer1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
