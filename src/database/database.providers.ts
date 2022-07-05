import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { DATABASE_PROVIDE, DATABASE_CONFIG } from '../common/constant';
import { Consultants } from '../consultant/model/consultant.model';
import { Answer } from 'src/answer/model/answer.model';
import { Question } from 'src/question/model/question.model';
import { Vote } from 'src/vote/model/vote.model';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDE,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(DATABASE_CONFIG),
      });
      sequelize.addModels([Consultants, Question, Answer, Vote]);
      return sequelize;
    },
  },
];
