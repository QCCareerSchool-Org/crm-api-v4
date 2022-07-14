import type { PaysafeCompany } from '../../domain/paymentMethodDTO';
import type { IConfigService } from '../config';
import { PaysafeService } from './paysafeService';
import type { IPaysafeService, IPaysafeServiceFactory } from '.';

export class PaysafeServiceFactory implements IPaysafeServiceFactory {

  public constructor(private readonly configService: IConfigService) { /* empty */ }

  public createInstance(currencyCode: string): IPaysafeService {
    const company = this.getCompany(currencyCode);
    const paysafeConfig = this.configService.config.paysafe[company];
    const accountNumber = paysafeConfig.accounts[currencyCode];
    if (typeof accountNumber === 'undefined') {
      throw Error(`No ${currencyCode} account found for ${company}`);
    }
    return new PaysafeService(company, paysafeConfig.apiKey, paysafeConfig.apiPassword, this.configService.config.environment === 'production' ? 'LIVE' : 'TEST', accountNumber);
  }

  private getCompany(currencyCode: string): PaysafeCompany {
    switch (currencyCode) {
      case 'CAD':
        return 'CA';
      case 'USD':
        return 'US';
      case 'GBP':
      case 'AUD':
      case 'NZD':
        return 'GB';
      default:
        throw Error('Unsupported currency for Paysafe');
    }
  }
}
