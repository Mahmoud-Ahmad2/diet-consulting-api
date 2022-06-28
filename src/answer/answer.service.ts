import { Injectable, Inject } from '@nestjs/common';
import { Answer } from './answer.model';
import { ANSWER_REPOSITORY } from 'src/common/constant';

@Injectable()
export class AnswerService {
  constructor(
    @Inject(ANSWER_REPOSITORY)
    private readonly answerRepository: typeof Answer,
  ) {}
}
