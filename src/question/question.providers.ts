import { Question } from './question.model';
import { QUESTION_REPOSITORY } from '../common/constant';

export const QuestionProviders = [
  {
    provide: QUESTION_REPOSITORY,
    useValue: Question,
  },
];
