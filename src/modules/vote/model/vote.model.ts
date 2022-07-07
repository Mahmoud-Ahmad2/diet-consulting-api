import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Consultants } from '../../consultant/model/consultant.model';
import { Answer } from '../../answer/model/answer.model';

@Table({ tableName: 'Votes', underscored: true })
export class Vote extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Consultants)
  @Column(DataType.INTEGER)
  consultantId;

  @ForeignKey(() => Answer)
  @Column(DataType.INTEGER)
  answerId;

  @Column(DataType.STRING)
  vote: string;

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;
}
