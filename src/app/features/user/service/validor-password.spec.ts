import { TestBed } from '@angular/core/testing';

import { ValidorPassword } from './validor-password';

describe('ValidorPassword', () => {
  let service: ValidorPassword;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidorPassword);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
