import type { PaysafeCompany } from '../../domain/paymentMethodDTO';
import type { IConfigService } from '../config';
import type { ILoggerService } from '../logger';
import { PaysafeService } from './paysafeService';
import type { IPaysafeService, IPaysafeServiceFactory } from '.';

export class PaysafeServiceFactory implements IPaysafeServiceFactory {

  public constructor(private readonly configService: IConfigService, private readonly logger: ILoggerService) { /* empty */ }

  public getDefaultCompany(currencyCode: string): PaysafeCompany {
    switch (currencyCode) {
      case 'CAD':
      case 'GBP':
      case 'AUD':
      case 'NZD':
        return 'CA';
      case 'USD':
        return 'US';
      default:
        throw Error('Unsupported currency for Paysafe');
    }
  }

  public createInstance(company: PaysafeCompany, currencyCode: string): IPaysafeService {
    const paysafeConfig = this.configService.config.paysafe[company];
    const accountNumber = paysafeConfig.accounts[currencyCode];
    if (typeof accountNumber === 'undefined') {
      throw Error(`No ${currencyCode} account found for ${company}`);
    }
    return new PaysafeService(
      company,
      currencyCode,
      paysafeConfig.apiKey,
      paysafeConfig.apiPassword,
      this.configService.config.environment === 'production' ? 'LIVE' : 'TEST',
      accountNumber,
      this.logger,
    );
  }
}
