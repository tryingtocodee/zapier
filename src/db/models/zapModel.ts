import { InferAttributes, InferCreationAttributes  , Model , CreationOptional, DataTypes} from "sequelize";
import sequelize from "./sequelize";

class Zap extends Model <InferAttributes<Zap> , InferCreationAttributes<Zap>>{
    declare id :  CreationOptional<number> 
    declare zapTitle : string 
}

Zap.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    zapTitle : {type : DataTypes.STRING , allowNull : false }
}, {
    tableName : "Zap",
    sequelize : sequelize,
    timestamps : true
})