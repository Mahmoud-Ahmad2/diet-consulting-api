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

@Table({ tableName: 'Questions', underscored: true })
export class Question extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  question: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isAnswered: boolean;

  @HasMany(() => Answer)
  answers: Answer[];

  @Column({ type: DataType.DATE })
  createdAt: Date;

  @Column({ type: DataType.DATE })
  updatedAt: Date;
}
