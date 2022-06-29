import {
  Model,
  Column,
  Table,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Consultants } from 'src/consultant/consultant.model';
import { Question } from 'src/question/question.model';

@Table
export class Answer extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @ForeignKey(() => Question)
  @Column({ allowNull: false })
  questionId: number;

  @ForeignKey(() => Consultants)
  @Column({ allowNull: false })
  consultantId: number;

  @Column({ type: 'TEXT', allowNull: false })
  title: string;

  @Column({ type: 'TEXT', allowNull: false })
  description: string;

  @Column({ type: 'TEXT', allowNull: false })
  recommendations: string;

  @Column({ type: 'BOOLEAN', allowNull: false })
  isDraft: boolean;

  @BelongsTo(() => Question)
  question: Question;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
