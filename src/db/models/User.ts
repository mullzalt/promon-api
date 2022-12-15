'use strict';

import { Model, UUIDV4, DataTypes, Optional, HasManyAddAssociationMixin } from "sequelize";
import db from ".";
import Role from "./Role";
import UserRole from "./UserRole";

interface UserAttributes {
  id?: string,
  name?: string,
  username?: string,
  password?: string,
  email?: string,
  profile?: string,
  company?: string,
  phone?: string,
  address?: string,
  img_url?: string
}

interface UserCreationalAttributes extends Optional<UserAttributes, 'id'> { }

class User extends Model<UserAttributes, UserCreationalAttributes>
  implements UserAttributes {

  public id!: string
  public name!: string
  public username!: string
  public password!: string
  public email!: string
  public profile!: string
  public company!: string
  public phone!: string
  public address!: string
  public img_url!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  profile: DataTypes.TEXT,
  company: DataTypes.STRING,
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
  img_url: DataTypes.TEXT
}, {
  sequelize: db.sequelize,
  timestamps: true,
  modelName: 'User',
});



export default User