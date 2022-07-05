import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'config';
import { ConsultantModule } from './consultant/consultant.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { VoteModule } from './vote/vote.module';

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
