import type { INodemailerOptions } from '@qccareerschool/winston-nodemailer';
import { NodemailerTransport } from '@qccareerschool/winston-nodemailer';
import { createLogger, format, transports } from 'winston';

import { environmentConfigService } from '../../services';

export const winston = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV === 'production') {
  const { email } = environmentConfigService.config;

  const options: INodemailerOptions = {
    auth: {
      pass: email.pass,
      user: email.user,
    },
    from: 'winston@qccareerschool.com',
    host: email.host,
    port: email.port,
    secure: email.mode === 'TLS',
    tags: [ 'crm-api' ],
    to: 'administrator@qccareerschool.com',
    filter: (info: unknown) => {
      if (typeof info === 'object' && info !== null && 'level' in info) {
        const { level } = info as { level: unknown };
        return typeof level === 'string' && [ 'error', 'crit', 'alert', 'emerg' ].includes(level);
      }
      return false;
    },
  };
  winston.add(new NodemailerTransport(options));
} else {
  winston.add(new transports.Console({
    format: format.simple(),
  }));
}
