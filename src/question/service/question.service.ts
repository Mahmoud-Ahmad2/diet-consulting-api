import { Injectable, Inject } from '@nestjs/common';
import { Question } from '../model/question.model';
import { providersEnum } from 'src/common/constant';
import { Answer } from 'src/answer/model/answer.model';
import sequelize from 'sequelize';
import { Op } from 'sequelize';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(providersEnum.QUESTION_REPOSITORY)
    private readonly questionRepository: typeof Question,
  ) {}

  async findAll(offset: number, consultantId: number): Promise<Question[]> {
    return await this.questionRepository.findAll({
      attributes: ['id', 'question'],
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
      order: [
        [sequelize.fn('COUNT', sequelize.col('answers.questionId')), 'ASC'],
      ],
      group: ['question.id', 'answers.id'],
      subQuery: false,
      limit: 3,
      offset,
    });
  }

  async findOneByQuestionId(
    questionId: number,
    consultantId: number,
  ): Promise<Question> {
    return await this.questionRepository.findOne({
      attributes: ['id', 'question', 'createdAt'],
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
}
