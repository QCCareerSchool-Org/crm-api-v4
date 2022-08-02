import validator from 'email-validator';

import type { IEmailValidatorService } from '.';

export class EmailValidatorService implements IEmailValidatorService {

  public validate(emailAddress: string): boolean {
    return validator.validate(emailAddress);
  }
}
