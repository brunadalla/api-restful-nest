import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // para ignorar todas a propriedades do json que não estão no dto
      forbidNonWhitelisted: true, // lançar um erro caso mande uma dado que não está no dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
