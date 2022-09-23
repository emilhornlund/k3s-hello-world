import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Hello World')
    .setDescription('Hello World API description')
    .setVersion('1.0')
    .addTag('Example', 'Example Tag')
    .addServer('http://localhost:8080')
    .addServer('http://traefik.local/hello_world')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api_docs', app, document);

  await app.listen(8080);
}
bootstrap();
