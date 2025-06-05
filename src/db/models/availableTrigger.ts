import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class AvailableTrigger extends Model <InferAttributes<AvailableTrigger> , InferCreationAttributes<AvailableTrigger>>{
    declare id : CreationOptional<number>
    declare availableTriggerName : string 
    declare actions : ForeignKey<number>
}

AvailableTrigger.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    availableTriggerName :  {type : DataTypes.STRING , allowNull : false , unique : true},
    actions : {type : DataTypes.INTEGER , references : {model : "Action" , key : "id"}},
},{
    tableName : "AvailableTrigger",
    sequelize : sequelize,
    timestamps : true
})

export default AvailableTrigger