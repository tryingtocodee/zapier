import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class AvailableAction extends Model<InferAttributes<AvailableAction> , InferCreationAttributes<AvailableAction>>{
    declare id : CreationOptional<number>
    declare availableTriggerId : ForeignKey<number>
    declare availableActionName : string 
}

AvailableAction.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    availableTriggerId : {type : DataTypes.INTEGER , references : {model : "AvailableTrigger" , key : "id"}},
    availableActionName : {type : DataTypes.STRING , allowNull : false , unique : true}
},{
    tableName : "AvailableAction",
    sequelize : sequelize,
    timestamps : true
})

export default AvailableAction