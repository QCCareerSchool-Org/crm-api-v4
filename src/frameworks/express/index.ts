import fs from 'fs';
import https from 'https';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import type { CorsOptions } from 'cors';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { CheckAuthenticationMiddleware } from '../../controllers/authentication/checkAuthenticationMiddleware.js';
import { environmentConfigService, winstonLoggerService } from '../../services/index.js';
import { asyncWrapper } from './asyncWrapper.js';
import { authenticationRouter } from './authenticationRouter.js';
import { router } from './router.js';
import { studentRouter } from './studentRouter.js';

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

app.use('/v4', router);
app.use('/v4/auth', authenticationRouter);

// all routes added after this will require authentication
app.use(asyncWrapper(async (req, res, next) => {
  const middleware = new CheckAuthenticationMiddleware(req, res, next);
  await middleware.execute();
}));

app.use('/v4/students', studentRouter);

if (environmentConfigService.config.environment === 'production') {
  const key = fs.readFileSync('755108159.key');
  const cert = fs.readFileSync('755108159.crt');
  const ca = [
    fs.readFileSync('755108159-intermediate-1.crt'),
    fs.readFileSync('755108159-intermediate-2.crt'),
  ];
  const httpsOptions = { key, cert, ca };
  https.createServer(httpsOptions, app).listen(port, () => {
    winstonLoggerService.info(`started on port ${port}`);
  });
} else {
  app.listen(port, () => {
    winstonLoggerService.info(`started on port ${port}`);
  });
}
