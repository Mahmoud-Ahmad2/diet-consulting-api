import { Controller, Get, Param, Query } from '@nestjs/common';
import { QuestionService } from '../service/question.service';
import { Question } from '../model/question.model';
import { User } from '../../common/decoretor/user.decorator';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getAllQuestions(
    @User() user,
    @Query('page') page: number,
  ): Promise<Question[]> {
    const { id } = user;
    const offset = (page - 1) * 3;
    return await this.questionService.findAll(offset, id);
  }

  @Get('/:id')
  async getQuestions(@User() user, @Param('id') id: number): Promise<Question> {
    const { id: userId } = user;
    return await this.questionService.findOneByQuestionId(id, userId);
  }
}
