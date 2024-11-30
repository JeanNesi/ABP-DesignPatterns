import fastifyStatic from '@fastify/static'; // Atualizado
import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import path from 'path';
import { AppModule } from '../../../presentation/modules/app.module';
import { ExceptionsFilter } from '../../http/filters/exception';
import { TrimPipe } from '../../http/pipes';

export async function configApi() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger: ['error', 'warn'],
    },
  );

  // Register the fastify-static plugin
  app.register(fastifyStatic, {
    root: path.join(__dirname, '../../../public'),
    prefix: '/public/',
  });

  //#REGION EXPETIONS FILTER
  app.useGlobalFilters(new ExceptionsFilter(app.get(HttpAdapterHost)));
  //#ENDREGION

  //#REGION VALIDATION PIPE FOR CLASS VALIDATOR
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalPipes(new TrimPipe());
  //#ENDREGION

  return app;
}