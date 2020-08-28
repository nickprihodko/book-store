
import { Sequelize, Table, Column, Model, DataType, BelongsTo, HasMany } from 'sequelize-typescript';

import Book from './Book';
import User from './User';

@Table
class Review extends Model<Review> {
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
 
  @BelongsTo(() => Book)
  bookId: Book;

  @BelongsTo(() => User)
  userId: User;
}

export default Review;
