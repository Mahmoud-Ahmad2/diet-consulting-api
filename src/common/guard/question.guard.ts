import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { verifyToken } from 'src/common/utils';
import { ConsultantService } from '../../consultant/service/consultant.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly consultantService: ConsultantService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const isPublic = this.reflector.get<boolean>(
        process.env.IS_PUBLIC_KEY,
        context.getHandler(),
      );

      if (isPublic) {
        return true;
      }
      const { token } = request.headers;
      if (!token) {
        throw new UnauthorizedException();
      }

      const verify = verifyToken(token);
      const { id } = verify as any;

      if (id) {
        const consultant = await this.consultantService.findOneByUserId(id);
        request.user = consultant;
        return true;
      }

      return false;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
