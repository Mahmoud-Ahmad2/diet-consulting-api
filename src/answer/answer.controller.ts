import {
  Body,
  Controller,
  HttpException,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerDto } from './answer.dto';
import { AuthGuard } from 'src/common/guard/question.guard';

@Controller('answer')
@UseGuards(AuthGuard)
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('addDraft/:questionId')
  async addDraft(
    @Request() req,
    @Body() answerDto: AnswerDto,
    @Param('questionId') questionId: number,
  ): Promise<object> {
    const { userId } = req;
    const answer = await this.answerService.findAnswerByConsultantId(
      userId,
      questionId,
    );
    if (answer) {
      throw new HttpException('Already answered', 400);
    }
    const { title, description, recommendations } = answerDto;
    return await this.answerService.addDraft(
      questionId,
      userId,
      title,
      description,
      recommendations,
    );
  }

  @Post('addAnswer/:questionId')
  async addAnswer(
    @Request() req,
    @Param('questionId') questionId: number,
  ): Promise<object> {
    const { userId } = req;
    const answer = await this.answerService.findAnswerByConsultantId(
      userId,
      questionId,
    );

    if (!answer.isDraft) {
      throw new HttpException('Already answered', 400);
    }

    await this.answerService.addAnswer(userId, questionId);

    return {
      message: 'Successfully answered',
    };
  }
}
