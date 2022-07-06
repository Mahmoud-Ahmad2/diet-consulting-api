import {
  Model,
  Column,
  Table,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';
import { Consultants } from '../../consultant/model/consultant.model';
import { Question } from '../../question/model/question.model';

@Table({
  tableName: 'Answers',
  underscored: true,
  paranoid: true,
})
export class Answer extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Question)
  @Column(DataType.INTEGER)
  questionId: number;

  @ForeignKey(() => Consultants)
  @Column(DataType.INTEGER)
  consultantId: number;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.ARRAY(DataType.STRING))
  recommendations: string[];

  @Column(DataType.BOOLEAN)
  isDraft: boolean;

  @BelongsTo(() => Question)
  question: Question;

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;

  @Column(DataType.DATE)
  deletedAt: Date;

  @Column(DataType.INTEGER)
  deletedBy: number;

  @Column(DataType.INTEGER)
  createdBy: number;

  @Column(DataType.INTEGER)
  updatedBy: number;
}
