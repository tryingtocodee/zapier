import {Sequelize} from "sequelize"

const sequelize = new Sequelize({
    username : "root",
    password : "MubeeN11@",
    database : "zapier",
    host : "127.0.0.1",
    dialect : "mysql"
})

export default sequelize