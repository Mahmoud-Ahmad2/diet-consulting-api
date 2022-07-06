import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { DATABASE_PROVIDE, DATABASE_CONFIG } from '../common/constant';
import { Consultants } from '../modules/consultant/model/consultant.model';
import { Answer } from '../modules/answer/model/answer.model';
import { Question } from '../modules/question/model/question.model';
import { Vote } from '../modules/vote/model/vote.model';

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
