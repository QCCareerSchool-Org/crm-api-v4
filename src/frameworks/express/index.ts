import compression from 'compression';
import cookieParser from 'cookie-parser';
import type { CorsOptions } from 'cors';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { CheckAuthenticationMiddleware } from '../../controllers/authentication/checkAuthenticationMiddleware.js';
import { environmentConfigService } from '../../services/config/index.js';
import { winstonLoggerService } from '../../services/logger/index.js';
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
// app.use(helmet({ crossOriginResourcePolicy: { policy: process.env.NODE_ENV === 'production' ? 'same-origin' : 'cross-origin' } }));
app.use(compression());
app.use(express.json({ limit: 524_288 })); // 512 KB
app.use(cookieParser());
app.use(cors(corsOptions));

app.get('/v4/test', (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.setHeader('content-security-policy', `default-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *;`);
  res.send(`
<form method="post" action="http://localhost:12080/v4/auth/login">
<input type="text" name="studentId" />
<input type="password" name="password" />
<button>Login</button>
</form>
<script>
  document.forms[0].addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentId: parseInt(form.elements.studentId.value, 10),
        password: form.elements.password.value,
      }),
      credentials: 'include',
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text();
      }
    }).then(body => {
      console.log(body)
    });
  });
</script>
  `);
});

app.use('/v4', router);
app.use('/v4/auth', authenticationRouter);

// all routes added after this will require authentication
app.use(asyncWrapper(async (req, res, next) => {
  const middleware = new CheckAuthenticationMiddleware(req, res, next);
  await middleware.execute();
}));

app.use('/v4/students', studentRouter);

app.listen(port, () => {
  winstonLoggerService.info(`started on port ${port}`);
});
