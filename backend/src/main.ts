import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,          // strip unknown props
    transform: true,
    forbidNonWhitelisted: true,
  }));

  const config = app.get(ConfigService);
  const port = config.get<number>('PORT') || 3000;
  const frontend = config.get<string>('FRONTEND_ORIGIN') || '*';

  // Enable CORS for your React frontend origin
  app.enableCors({
    origin: frontend,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  await app.listen(port);
  console.log(`Server listening on port ${port}`);
}
bootstrap();
