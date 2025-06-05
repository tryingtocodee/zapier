import { CreationAttributes, CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class ZapRunOutBox extends Model<InferAttributes<ZapRunOutBox> , InferCreationAttributes<ZapRunOutBox>>{
    declare id : CreationOptional<number>
    declare zapRunId : ForeignKey<number>
}

ZapRunOutBox.init({
    id : {type : DataTypes.INTEGER , autoIncrement :true , primaryKey : true},
    zapRunId : {type     : DataTypes.INTEGER , references : {model : "ZapRun" , key : "id"}}
} ,{
    tableName : "ZapRunOutbox",
    sequelize : sequelize,
    timestamps : true
})