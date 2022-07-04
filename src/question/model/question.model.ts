import {
  Model,
  Column,
  Table,
  PrimaryKey,
  HasMany,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';
import { Answer } from 'src/answer/model/answer.model';

@Table
export class Question extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  question: string;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  isAnswered: boolean;

  @HasMany(() => Answer)
  answers: Answer[];

  @Column({ type: DataType.DATE })
  createdAt: Date;

  @Column({ type: DataType.DATE })
  updatedAt: Date;

  @Column({ type: DataType.DATE })
  deletedAt: Date;

  @Column({ type: DataType.INTEGER })
  deletedBy: number;

  @Column({ type: DataType.INTEGER })
  createdBy: number;

  @Column({ type: DataType.INTEGER })
  updatedBy: number;
}
