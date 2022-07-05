import { Question } from './model/question.model';
import { providersEnum } from '../common/constant';

export const questionProviders = [
  {
    provide: providersEnum.QUESTION_REPOSITORY,
    useValue: Question,
  },
];
