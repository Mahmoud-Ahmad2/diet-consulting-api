import { Injectable, Inject } from '@nestjs/common';
import { Question } from './question.model';
import { QUESTION_REPOSITORY } from 'src/common/constant';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(QUESTION_REPOSITORY)
    private readonly questionRepository: typeof Question,
  ) {}
}
