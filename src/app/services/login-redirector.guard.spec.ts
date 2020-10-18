import { TestBed } from '@angular/core/testing';

import { LoginRedirectorGuard } from './login-redirector.guard';

describe('LoginRedirectorGuard', () => {
  let guard: LoginRedirectorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginRedirectorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
