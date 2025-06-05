import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class Triggers extends Model <InferAttributes <Triggers> , InferCreationAttributes<Triggers>>{
    declare id : CreationOptional<number>
    declare triggerName : string 
    declare zapId : ForeignKey<number>
    declare triggerType : ForeignKey<number>
}

Triggers.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    triggerName : {type : DataTypes.STRING , allowNull : false , unique : true},
    zapId : {type : DataTypes.INTEGER  , references : {model : "Zap" , key : "id"}},
    triggerType : {type : DataTypes.INTEGER , references : {model : "AvailableTrigger" , key : "id"}}
},{
    tableName : "Trigger",
    sequelize : sequelize,
    timestamps : true
})

export default Triggers