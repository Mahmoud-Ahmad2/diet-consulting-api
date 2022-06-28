import {
  Model,
  Column,
  Table,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
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
  title: string;

  @Column({ type: 'TEXT', allowNull: false })
  description: string;

  @Column({ type: 'TEXT', allowNull: false })
  recommendations: string;

  @BelongsTo(() => Question)
  question: Question;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
