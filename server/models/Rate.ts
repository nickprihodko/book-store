import { Sequelize, Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';

import Book from './Book';

@Table
class Rate extends Model<Rate> {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: 'id'
  })
  id: BigInt;

  @Column({
    type: DataType.FLOAT,
    comment: 'rating'
  })
  rate: Number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    comment: "users.id",
  })
  userId: BigInt;

  @Column({
    type: DataType.DATE,
    defaultValue: Sequelize.fn('now')
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: Sequelize.fn('now')
  })
  updatedAt: Date;

  @ForeignKey(() => Book)
  bookId: number
}

export default Rate;
