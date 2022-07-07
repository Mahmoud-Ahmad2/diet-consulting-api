import { Consultants } from './model/consultant.model';
import { providersEnum } from '../../common/constant';

export const consultantProviders = [
  {
    provide: providersEnum.CONSULTANT_PROVIDER,
    useValue: Consultants,
  },
];
