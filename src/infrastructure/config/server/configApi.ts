import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';


import { ExceptionsFilter } from '../../http/filters/exception';
import { TrimPipe } from '../../http/pipes';
import { AppModule } from '../../../presentation/modules/app.module';

export async function configApi() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger: ['error', 'warn'],
    },
  );

  //#REGION EXPETIONS FILTER
  app.useGlobalFilters(new ExceptionsFilter(app.get(HttpAdapterHost)));
  //#ENDREGION

  //#REGION VALIDATION PIPE FOR CLASS VALIDATOR
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalPipes(new TrimPipe());
  //#ENDREGION

  return app;
}
