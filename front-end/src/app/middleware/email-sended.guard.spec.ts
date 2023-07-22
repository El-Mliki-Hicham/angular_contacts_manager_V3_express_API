import { TestBed } from '@angular/core/testing';

import { EmailSendedGuard } from './email-sended.guard';

describe('EmailSendedGuard', () => {
  let guard: EmailSendedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmailSendedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
