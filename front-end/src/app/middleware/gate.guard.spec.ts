import { TestBed } from '@angular/core/testing';

import { GateGuard } from './gate.guard';

describe('GateGuard', () => {
  let guard: GateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
