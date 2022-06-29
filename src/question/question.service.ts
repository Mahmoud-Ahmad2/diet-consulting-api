import { Injectable, Inject } from '@nestjs/common';
import { Question } from './question.model';
import { QUESTION_REPOSITORY } from 'src/common/constant';
import { Answer } from 'src/answer/answer.model';
import sequelize from 'sequelize';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(QUESTION_REPOSITORY)
    private readonly questionRepository: typeof Question,
  ) {}

  async findAll(offset: number): Promise<Question[]> {
    return await this.questionRepository.findAll({
      attributes: ['id', 'question'],
      include: [
        {
          model: Answer,
          attributes: [
            'id',
            // 'questionId',
            // 'title',
            // 'description',
            // 'recommendations',
          ],
          // order: [[sequelize.fn('COUNT', sequelize.col('answers.id')), 'ASC']],
          // duplicating: false,
          as: 'answers',
          required: false,
        },
      ],
      order: [
        [sequelize.fn('COUNT', sequelize.col('answers.questionId')), 'ASC'],
      ],
      group: ['question.id', 'answers.id'],
      subQuery: false,
      // limit: 3,
      // offset,
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
