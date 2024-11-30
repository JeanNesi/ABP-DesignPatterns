import cors from '@fastify/cors';
import fastifyCsrf from '@fastify/csrf-protection';
import helmet from '@fastify/helmet';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { env } from '../env';

export async function configSecurity(app: NestFastifyApplication) {
  await app.register(fastifyCsrf);
  await app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    }});
  console.log(env.get('CORS_ORIGIN'));
  await app.register(cors, {
    origin: env.get('CORS_ORIGIN'),
  });
}
