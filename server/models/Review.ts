
import { Sequelize, Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';

import Book from './Book';
import User from './User';

@Table
class review extends Model<review> {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: 'id'
  })
  id: BigInt;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'review text'
  })
  text: String;

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
  bookId: number;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => Book)
  book: Book;

  @BelongsTo(() => User)
  user: User;
}

export default review;
