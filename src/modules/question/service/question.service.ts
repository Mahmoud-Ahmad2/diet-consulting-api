import { Injectable, Inject } from '@nestjs/common';
import { Question } from '../model/question.model';
import { providersEnum } from 'src/common/constant';
import { Answer } from '../../answer/model/answer.model';
import { Op } from 'sequelize';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(providersEnum.QUESTION_PROVIDER)
    private readonly questionRepository: typeof Question,
  ) {}

  async findAll(offset: number, consultantId: number): Promise<Question[]> {
    return await this.questionRepository.findAll({
      order: [['isAnswered', 'ASC']],
      include: [
        {
          model: Answer,
          attributes: [
            'id',
            'questionId',
            'title',
            'description',
            'recommendations',
            'isDraft',
            'consultantId',
            'createdAt',
          ],
          where: {
            [Op.or]: [
              {
                isDraft: false,
              },
              {
                consultantId,
              },
            ],
          },
          as: 'answers',
          required: false,
        },
      ],
      limit: 3,
      offset,
    });
  }

  async findOneByQuestionId(
    questionId: number,
    consultantId: number,
  ): Promise<Question> {
    return await this.questionRepository.findOne({
      where: {
        id: questionId,
      },
      include: [
        {
          model: Answer,
          attributes: [
            'id',
            'questionId',
            'consultantId',
            'title',
            'description',
            'recommendations',
            'isDraft',
            'createdAt',
          ],
          where: {
            [Op.or]: [
              {
                isDraft: false,
              },
              {
                consultantId,
              },
            ],
          },
          required: false,
          as: 'answers',
        },
      ],
    });
  }
  async changeIsAnsweredToTrue(questionId: number): Promise<void> {
    await this.questionRepository.update(
      { isAnswered: true },
      { where: { id: questionId } },
    );
  }

  async checkIsAnswered(questionId: number): Promise<object> {
    const answerCount = await this.questionRepository.count({
      where: {
        id: questionId,
        isAnswered: true,
      },
    });
    if (answerCount === 1) {
      return this.questionRepository.update(
        { isAnswered: false },
        { where: { id: questionId } },
      );
    }

    return {
      message: 'Question is not answered',
    };
  }
}
