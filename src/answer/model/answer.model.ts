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
import { Consultants } from 'src/consultant/model/consultant.model';
import { Question } from 'src/question/model/question.model';

@Table({
  tableName: 'Answers',
  underscored: true,
  paranoid: true,
})
export class Answer extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Question)
  @Column({ allowNull: false })
  questionId: number;

  @ForeignKey(() => Consultants)
  @Column({ allowNull: false })
  consultantId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  recommendations: string[];

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isDraft: boolean;

  @BelongsTo(() => Question)
  question: Question;

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
