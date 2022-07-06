import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'config';
import { ConsultantModule } from './modules/consultant/consultant.module';
import { QuestionModule } from './modules/question/question.module';
import { AnswerModule } from './modules/answer/answer.module';
import { VoteModule } from './modules/vote/vote.module';

@Module({
  imports: [
    ConsultantModule,
    VoteModule,
    DatabaseModule,
    QuestionModule,
    AnswerModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
