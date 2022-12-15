import { DataTypes, Model, Optional } from "sequelize";
import db from ".";
import User from "./User";
import UserRole from "./UserRole";


interface RoleAttributes {
  id?: number,
  name?: string
}

interface RoleCreationalAttributes extends Optional<RoleAttributes, 'id'> { }


class Role extends Model<RoleAttributes, RoleCreationalAttributes>
  implements RoleAttributes {
  id!: number
  name!: string
}
Role.init({
  name: DataTypes.STRING
}, {
  sequelize: db.sequelize,
  modelName: 'Role',
});


export default Role