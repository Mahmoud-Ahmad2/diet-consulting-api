import { Model, Column, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class Question extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column({ type: 'TEXT', allowNull: false })
  question: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
