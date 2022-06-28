import { Consultants } from './consultant.model';
import { CONSULTANT_REPOSITORY } from '../common/constant';

export const ConsultantProviders = [
  {
    provide: CONSULTANT_REPOSITORY,
    useValue: Consultants,
  },
];
