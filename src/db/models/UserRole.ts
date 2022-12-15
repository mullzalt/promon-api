'use strict';

import { DataTypes, Model, Optional } from "sequelize";
import db from ".";
import Role from './Role'
import User from './User'

interface UserRoleAttributes {
  id?: number
  userId?: string
  roleId?: number
}

interface UserRoleCreationalAttributes extends Optional<UserRoleAttributes, 'id'> { }

class UserRole extends Model<UserRoleAttributes, UserRoleCreationalAttributes>
  implements UserRoleAttributes {
  id!: number
  userId!: string
  roleId!: number
}

UserRole.init({
  userId: DataTypes.UUID,
  roleId: DataTypes.INTEGER
}, {
  sequelize: db.sequelize,
  underscored: false,
  tableName: 'user_roles'
});

UserRole.belongsTo(User, {
  foreignKey: 'userId'
})
UserRole.belongsTo(Role, {
  foreignKey: 'roleId'
})


export default UserRole
