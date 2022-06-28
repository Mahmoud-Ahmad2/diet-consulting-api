import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionDto } from './question.dto';
import { verifyToken } from '../utils';

@Controller('consultation')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
}
