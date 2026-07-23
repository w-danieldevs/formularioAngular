import { TestBed } from '@angular/core/testing';

import { UserModule } from './user.module';

describe('UserModule', () => {
  let service: UserModule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
