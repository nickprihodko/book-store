import { Sequelize, Table, Column, Model, DataType, BelongsTo } from 'sequelize-typescript';

const User = require("./User");

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
 
  @BelongsTo(() => User)
  userId: BigInt;
}

export default Favorite;
