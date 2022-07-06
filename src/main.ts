import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './common/guard/question.guard';
import { ConsultantService } from './modules/consultant/service/consultant.service';
import { Reflector } from '@nestjs/core';
import { RolesGuard } from './common/guard/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.useGlobalGuards(
    new AuthGuard(new Reflector(), app.get(ConsultantService)),
    new RolesGuard(new Reflector()),
  );
  await app.listen(3000);
}
bootstrap();
