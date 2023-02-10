import type { ProvinceDTO } from '../../domain/provinceDTO.js';
import type { PrismaClient } from '../../frameworks/prisma/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type GetProvincesByCountryCodeRequestDTO = {
  countryCode: string;
};

export type GetProvincesByCountryCodeResponseDTO = ProvinceDTO[];

export class GetProvincesByCountryCodeInteractor implements IInteractor<GetProvincesByCountryCodeRequestDTO, GetProvincesByCountryCodeResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute({ countryCode }: GetProvincesByCountryCodeRequestDTO): Promise<ResultType<GetProvincesByCountryCodeResponseDTO>> {
    try {
      const provinces = await this.prisma.province.findMany({
        where: { country: { code: countryCode } },
      });

      return Result.success(provinces.map(p => ({
        provinceId: p.provinceId,
        countryId: p.countryId,
        code: p.code,
        name: p.name,
      })));

    } catch (err) {
      this.logger.error('error getting provinces', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
