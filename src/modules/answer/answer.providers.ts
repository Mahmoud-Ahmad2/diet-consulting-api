import { Answer } from './model/answer.model';
import { providersEnum } from '../../common/constant';

export const answerProviders = [
  {
    provide: providersEnum.ANSWER_PROVIDER,
    useValue: Answer,
  },
];
