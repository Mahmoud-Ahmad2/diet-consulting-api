import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Consultants } from 'src/consultant/model/consultant.model';
import { Answer } from 'src/answer/model/answer.model';

@Table({ tableName: 'Votes', underscored: true })
export class Vote extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Consultants)
  @Column({ type: DataType.INTEGER, allowNull: false })
  consultantId;

  @ForeignKey(() => Answer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  answerId;

  @Column({ type: DataType.STRING, allowNull: false })
  vote: string;

  @Column({ type: DataType.DATE })
  createdAt: Date;

  @Column({ type: DataType.DATE })
  updatedAt: Date;
}
