import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'config';
import { ConsultantModule } from './consultant/consultant.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    ConsultantModule,
    DatabaseModule,
    QuestionModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
