import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class AvailableAction extends Model<InferAttributes<AvailableAction> , InferCreationAttributes<AvailableAction>>{
    declare id : CreationOptional<number>
    declare availableActionName : string 
}

AvailableAction.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    availableActionName : {type : DataTypes.STRING , allowNull : false , unique : true}
},{
    tableName : "AvailableAction",
    sequelize : sequelize,
    timestamps : true
})

export default AvailableAction