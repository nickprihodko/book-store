import { Sequelize, Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
class user extends Model<user> {
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
    comment: 'user name'
  })
  name: String;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    comment: 'email name'
  })
  email: String;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    comment: 'password'
  })
  password: String;

  @Column({
    type: DataType.STRING,
    comment: 'user avatar'
  })
  avatar: String;

  @Column({
    type: DataType.TEXT,
    comment: 'about'
  })
  about: String;

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
}

export default user;
