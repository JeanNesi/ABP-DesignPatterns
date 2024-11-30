import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import metadata from '../../../metadata';
import { env } from '../env';

export async function configSwagger(app: NestFastifyApplication) {
  const config = new DocumentBuilder()
    .setTitle(env.get('PROJECT_NAME'))
    .setDescription(env.get('PROJECT_DESCRIPTION'))
    .setVersion(env.get('PROJECT_VERSION'))
    .addBearerAuth({
      type: 'apiKey',
      bearerFormat: 'JWT',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    })
    .build();

  await SwaggerModule.loadPluginMetadata(metadata);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.52.5/swagger-ui.css',  // URL do CSS
    customJs: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.52.5/swagger-ui-bundle.js',  // URL do JS
  });
}
