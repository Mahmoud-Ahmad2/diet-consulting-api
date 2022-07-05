import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  HttpException,
  Patch,
} from '@nestjs/common';
import { QuestionService } from '../service/question.service';
import { Question } from '../model/question.model';
import { User } from '../../common/decorator/user.decorator';
import { AnswerDto } from '../../answer/dto/answer.dto';
import { AnswerService } from 'src/answer/service/answer.service';

@Controller('questions')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
  ) {}

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

  @Post('/:questionId/answer')
  async addDraft(
    @User() user,
    @Body() answerDto: AnswerDto,
    @Param('questionId') questionId: number,
  ): Promise<object> {
    const { id } = user;
    const answer = await this.answerService.findAnswerByConsultantId(
      id,
      questionId,
    );
    if (answer) {
      throw new HttpException('Already answered', 400);
    }
    const { title, description, recommendations } = answerDto;
    return await this.answerService.addDraft(
      questionId,
      id,
      title,
      description,
      recommendations,
    );
  }

  @Patch('/:questionId/answer')
  async addAnswer(
    @User() user,
    @Param('questionId') questionId: number,
  ): Promise<object> {
    const { id } = user;
    const answer = await this.answerService.findAnswerByConsultantId(
      id,
      questionId,
    );

    if (!answer.isDraft) {
      throw new HttpException('Already answered', 400);
    }

    await this.answerService.addAnswer(id, questionId);

    return {
      message: 'Successfully answered',
    };
  }
}
