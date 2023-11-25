import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // Ignorar propriedades que não estiverem no dto
      forbidNonWhitelisted: true, // Dispara um erro caso envie um campo não esperado na validação
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true }); // Adiciona referências de modularização do nest para o class validator
  await app.listen(3000);
}
bootstrap();
