import type { CountryDTO } from '../../domain/countryDTO.js';
import type { PrismaClient } from '../../frameworks/prisma/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type GetCountriesRequestDTO = void;

export type GetCountriesResponseDTO = CountryDTO[];

export class GetCountriesInteractor implements IInteractor<GetCountriesRequestDTO, GetCountriesResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute(): Promise<ResultType<GetCountriesResponseDTO>> {
    try {
      const countries = await this.prisma.country.findMany();

      return Result.success(countries.map(c => ({
        countryId: c.countryId,
        code: c.code,
        name: c.name,
        needsPostalCode: c.needsPostalCode,
      })));

    } catch (err) {
      this.logger.error('error getting countries', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
