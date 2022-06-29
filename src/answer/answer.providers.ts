import { Answer } from './answer.model';
import { ANSWER_REPOSITORY } from '../common/constant';

export const AnswerProviders = [
  {
    provide: ANSWER_REPOSITORY,
    useValue: Answer,
  },
];
