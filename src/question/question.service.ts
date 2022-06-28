import { Injectable, Inject } from '@nestjs/common';
import { Question } from './question.model';
import { QUESTION_REPOSITORY } from 'src/common/constant';
import { Answer } from 'src/answer/answer.model';
import sequelize, { where } from 'sequelize';
import { Op } from 'sequelize';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(QUESTION_REPOSITORY)
    private readonly questionRepository: typeof Question,
  ) {}

  async findAll(offset: number): Promise<Question[]> {
    return await this.questionRepository.findAll({
      // include: Answer and return the empty array if no answer
      attributes: [
        'id',
        'question',
        [
          sequelize.fn('COUNT', sequelize.col('answers.questionId')),
          'answerCount',
        ],
      ],
      include: [
        {
          model: Answer,
          attributes: [
            'id',
            'questionId',
            'title',
            'description',
            'recommendations',
          ],
          duplicating: false,
          as: 'answers',
          required: false,
        },
      ],
      group: ['question.id', 'answers.id'],
      order: [[sequelize.fn('COUNT', sequelize.col('answers.id')), 'ASC']],
      offset,
      limit: 3,
    });
  }
  async findOneByQuestionId(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: {
        id,
      },
      include: [{ model: Answer }],
    });
  }
}
