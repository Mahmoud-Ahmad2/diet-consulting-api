import {
  Model,
  Column,
  Table,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import { Answer } from 'src/answer/answer.model';

@Table
export class Question extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column({ type: 'TEXT', allowNull: false })
  question: string;

  @Column
  createdAt: Date;

  @HasMany(() => Answer)
  answers: Answer[];

  @Column
  updatedAt: Date;
}
