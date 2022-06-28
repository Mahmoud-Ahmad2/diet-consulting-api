import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerDto } from './answer.dto';
import { verifyToken } from '../utils';

@Controller('consultation')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}
}
