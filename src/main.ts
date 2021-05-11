import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import AppModule from './example/app.module';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import basicAuth from 'express-basic-auth';
import { config } from 'dotenv';
config();

function initSwagger(app: INestApplication): void {
  if (process.env.ENABLE_SWAGGER_DOCS === 'true') {
    app.use(
      '/api-docs',
      basicAuth({
        challenge: true,
        users: { [process.env.SWAGGER_USER]: process.env.SWAGGER_PASS },
      }),
    );

    const options = new DocumentBuilder().setTitle('tinkering-with-pokeapi').build();
    const document = SwaggerModule.createDocument(app, options, {
      include: [AppModule],
    });
    SwaggerModule.setup('/api-docs', app, document);
  }
}

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  await app.listen(process.env.APPLICATION_PORT || 3005);
}

bootstrap();
