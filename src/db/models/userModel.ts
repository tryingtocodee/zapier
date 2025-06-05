import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class User extends Model<InferAttributes<User> , InferCreationAttributes<User>> {
    declare id : CreationOptional<number>
    declare username : string
    declare email : string 
    declare password : string 
}

User.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    username : {type : DataTypes.STRING , allowNull : false},
    email : {type : DataTypes.STRING , allowNull : false , unique : true},
    password : {type : DataTypes.STRING , allowNull : false}
},{
    tableName : "User",
    sequelize : sequelize,
    timestamps : true
})

export default User