import { TestBed } from '@angular/core/testing';

import { ExitLoginGuard } from './exit-login.guard';

describe('ExitLoginGuard', () => {
  let guard: ExitLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
