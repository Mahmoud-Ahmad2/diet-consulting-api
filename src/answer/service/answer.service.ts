import { Injectable, Inject, HttpException } from '@nestjs/common';
import { Answer } from '../model/answer.model';
import { providersEnum } from 'src/common/constant';

@Injectable()
export class AnswerService {
  constructor(
    @Inject(providersEnum.ANSWER_REPOSITORY)
    private readonly answerRepository: typeof Answer,
  ) {}
  async addDraft(
    questionId: number,
    consultantId: number,
    title: string,
    description: string,
    recommendations: string,
  ): Promise<object> {
    const answer = await this.answerRepository.findOne({
      where: {
        consultantId,
        questionId,
      },
    });

    if (answer) {
      return await this.answerRepository.update(
        {
          title,
          description,
          recommendations,
        },
        { where: { consultantId, questionId } },
      );
    }
    return await this.answerRepository.create({
      questionId,
      consultantId,
      createdBy: consultantId,
      title,
      description,
      recommendations,
      isDraft: true,
    });
  }

  async findAnswerByConsultantId(
    consultantId: number,
    questionId: number,
  ): Promise<Answer> {
    return await this.answerRepository.findOne({
      where: {
        consultantId,
        questionId,
      },
    });
  }

  async addAnswer(
    consultantId: number,
    questionId: number,
  ): Promise<Array<number>> {
    const answer = await this.findAnswerByConsultantId(
      consultantId,
      questionId,
    );

    if (!answer.isDraft) {
      throw new HttpException('Already answered', 400);
    }

    return await this.answerRepository.update(
      { isDraft: false },
      { where: { consultantId, questionId } },
    );
  }

  async deleteAnswer(
    consultantId: number,
    questionId: number,
    answerId: number,
  ): Promise<number> {
    return await this.answerRepository.destroy({
      where: {
        consultantId,
        questionId,
        id: answerId,
      },
    });
  }
}
