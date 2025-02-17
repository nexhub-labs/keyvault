import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupCors } from 'cors/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  setupCors(app, configService);

  await app.listen(process.env.KEYVAULT_PORT ?? 3000);
}
bootstrap();
