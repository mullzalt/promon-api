import { Sequelize, Op, fn } from "sequelize";

const env = process.env.NODE_ENV || 'development'
const config = require('../../configs/database')[env]

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
})

const db = {
    Sequelize,
    sequelize,
    Op,
    fn
}

export default db