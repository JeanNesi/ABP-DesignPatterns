import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from '../env';

export async function configSwagger(app: NestFastifyApplication) {
  const projectName = env.get('PROJECT_NAME') || 'Default Project Name';
  const projectDescription = env.get('PROJECT_DESCRIPTION') || 'Default Description';
  const projectVersion = env.get('PROJECT_VERSION') || '1.0.0';

  const config = new DocumentBuilder()
    .setTitle(projectName)
    .setDescription(projectDescription)
    .setVersion(projectVersion)
    .addBearerAuth({
      type: 'apiKey',
      bearerFormat: 'JWT',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Usar customCssUrl e customJs para fornecer os arquivos estáticos corretamente
  SwaggerModule.setup('docs', app, document, {
    customCssUrl: '/public/swagger-ui.css', // Caminho para o CSS do Swagger UI
    customJs: '/public/swagger-ui-bundle.js', // Caminho para o JS do Swagger UI
    customSiteTitle: 'API Documentation',
  });
}
