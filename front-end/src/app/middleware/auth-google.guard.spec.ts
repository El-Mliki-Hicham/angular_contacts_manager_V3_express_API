import { TestBed } from '@angular/core/testing';

import { AuthGoogleGuard } from './auth-google.guard';

describe('AuthGoogleGuard', () => {
  let guard: AuthGoogleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGoogleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
