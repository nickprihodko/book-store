import { Sequelize, Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';

import User from './User';
import Book from './Book';

@Table
class Favorite extends Model<Favorite> {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    comment: 'id'
  })
  id: BigInt;

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
  userId: number

  @BelongsTo(() => User)
  user: BigInt;
}

export default Favorite;
