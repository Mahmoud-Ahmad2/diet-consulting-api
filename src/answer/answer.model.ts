import {
  Model,
  Column,
  Table,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Question } from 'src/question/question.model';

@Table
export class Answer extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @ForeignKey(() => Question)
  @Column({ allowNull: false })
  questionId: number;

  @Column({ type: 'TEXT', allowNull: false })
  answer: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
