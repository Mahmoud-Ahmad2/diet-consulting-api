import { Model, Column, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class Consultants extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column({ type: 'TEXT', allowNull: false })
  email: string;

  @Column({ type: 'TEXT', allowNull: false })
  username: string;

  @Column({ type: 'TEXT', allowNull: false })
  password: string;

  @Column({ type: 'TEXT', allowNull: false })
  firstName: string;

  @Column({ type: 'TEXT', allowNull: false })
  middleName: string;

  @Column({ type: 'TEXT', allowNull: false })
  lastName: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
