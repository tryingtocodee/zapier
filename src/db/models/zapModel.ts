import { InferAttributes, InferCreationAttributes  , Model , CreationOptional, DataTypes, ForeignKey} from "sequelize";
import sequelize from "./sequelize";

class Zap extends Model <InferAttributes<Zap> , InferCreationAttributes<Zap>>{
    declare id :  CreationOptional<number> 
    declare userId : ForeignKey<number>
    declare zapTitle : string 
    declare isActive : boolean
}

Zap.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    userId : {type : DataTypes.INTEGER , references : {model : "User" , key :"id"}},
    zapTitle : {type : DataTypes.STRING , allowNull : false },
    isActive : {type : DataTypes.BOOLEAN , defaultValue : "false"}
}, {
    tableName : "Zap",
    sequelize : sequelize,
    timestamps : true
})
export default Zap