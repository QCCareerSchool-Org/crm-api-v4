import compression from 'compression';
import cookieParser from 'cookie-parser';
import type { CorsOptions } from 'cors';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { CheckAuthenticationMiddleware } from '../../controllers/checkAuthenticationMiddleware';

import { environmentConfigService, winstonLoggerService } from '../../services';
import { asyncWrapper } from './asyncWrapper';
import { router } from './router';

const { port } = environmentConfigService.config;

const corsOptions: CorsOptions = {
  origin: process.env.NODE_ENV === 'production' ? 'https://studentcenter.qccareerschool.com' : 'http://localhost:3000',
  credentials: true,
  exposedHeaders: [ 'Content-Disposition' ],
};

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json({ limit: 524_288 })); // 512 KB
app.use(cookieParser());
app.use(cors(corsOptions));

// all routes added after this will require authentication
app.use(asyncWrapper(async (req, res, next) => {
  const middleware = new CheckAuthenticationMiddleware(req, res, next);
  await middleware.execute();
}));

app.use('/v4', router);

app.listen(port, () => {
  winstonLoggerService.info(`started on port ${port}`);
});
