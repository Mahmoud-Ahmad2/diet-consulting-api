import {
  Model,
  Column,
  Table,
  PrimaryKey,
  HasMany,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';
import { Answer } from '../../answer/model/answer.model';

@Table({ tableName: 'Questions', underscored: true })
export class Question extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  question: string;

  @Column(DataType.BOOLEAN)
  isAnswered: boolean;

  @HasMany(() => Answer)
  answers: Answer[];

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;
}
