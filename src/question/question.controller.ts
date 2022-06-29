import {
  Controller,
  Get,
  HttpException,
  Param,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.model';
import { AuthGuard } from 'src/common/guard/question.guard';

@Controller('questions')
@UseGuards(AuthGuard)
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getAllQuestions(@Query('page') page: number): Promise<Question[]> {
    const offset = (page - 1) * 3;
    return await this.questionService.findAll(offset);
  }

  @Get('/:id')
  async getQuestions(
    @Request() req,
    @Param('id') id: number,
  ): Promise<Question> {
    const { userId } = req;
    return await this.questionService.findOneByQuestionId(id, userId);
  }
}
