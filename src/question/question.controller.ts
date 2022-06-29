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
  async getAllQuestions(
    @Request() req,
    @Query('page') page: number,
  ): Promise<Question[]> {
    const { userId } = req;
    const offset = (page - 1) * 3;
    return await this.questionService.findAll(offset, userId);
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
