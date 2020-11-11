import { TestBed } from '@angular/core/testing';

import { Posts1Service } from './posts1.service';

describe('Posts1Service', () => {
  let service: Posts1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Posts1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
