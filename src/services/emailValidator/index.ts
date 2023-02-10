import { EmailValidatorService } from './emailValidatorService';

export interface IEmailValidatorService {
  validate: (emailAddress: string) => boolean;
}

export const emailValidatorService = new EmailValidatorService();
