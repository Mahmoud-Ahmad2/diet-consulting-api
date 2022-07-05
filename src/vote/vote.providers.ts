import { Vote } from './model/vote.model';
import { providersEnum } from '../common/constant';

export const voteProviders = [
  {
    provide: providersEnum.VOTE_REPOSITORY,
    useValue: Vote,
  },
];
