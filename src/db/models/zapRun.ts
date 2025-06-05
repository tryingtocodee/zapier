import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class ZapRun extends Model <InferAttributes<ZapRun> , InferCreationAttributes<ZapRun>>{
    declare id : CreationOptional<number>
    declare zapId : ForeignKey<number>
    declare metaData : JSON
}

ZapRun.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    zapId : {type : DataTypes.INTEGER , references : {model : "Zap" , key : "id"}},
    metaData : {type : DataTypes.JSON}
},{
    tableName : "ZapRun",
    sequelize : sequelize,
    timestamps : true 
})