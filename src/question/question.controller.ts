import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionDto } from './question.dto';
import { verifyToken } from '../utils';
import { Question } from './question.model';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getAllQuestions(@Query('page') page: number): Promise<Question[]> {
    const offset = (page - 1) * 3;
    return await this.questionService.findAll(offset);
  }

  @Get('/:id')
  async getQuestions(@Param('id') id: number): Promise<Question> {
    return await this.questionService.findOneByQuestionId(id);
  }
}
