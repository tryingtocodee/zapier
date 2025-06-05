import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class Action extends Model<InferAttributes <Action> , InferCreationAttributes<Action>>{
    declare id : CreationOptional<number>
    declare actionName : string 
    declare triggerId : ForeignKey<number>
    declare availableActions : ForeignKey<number>
}

Action.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
     actionName : {type : DataTypes.STRING , allowNull : false, unique : true},
    triggerId : {type : DataTypes.INTEGER , references : {model : "Trigger" , key :"id"}},
    availableActions : {type : DataTypes.INTEGER , references : {model : "AvailableAction" , key : "id"}}
},{
    tableName : "Action",
    sequelize : sequelize,
    timestamps : true
})

export default Action