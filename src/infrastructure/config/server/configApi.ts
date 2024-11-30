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

  //#REGION EXPETIONS FILTER
  app.useGlobalFilters(new ExceptionsFilter(app.get(HttpAdapterHost)));
  //#ENDREGION

  //#REGION VALIDATION PIPE FOR CLASS VALIDATOR
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalPipes(new TrimPipe());
  //#ENDREGION

  // Configuração para servir arquivos estáticos (como os do Swagger UI)
  app.register(fastifyStatic, {
    root: path.join(__dirname, 'public'), // Caminho para a pasta onde os arquivos estáticos estão
    prefix: '/public/', // Prefixo para os URLs de acesso aos arquivos estáticos
  });

  return app;
}