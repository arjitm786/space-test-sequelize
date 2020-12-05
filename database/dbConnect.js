const Sequelize = require('sequelize')

const sequelize = new Sequelize('space','root','root',{
    dialect: 'mysql', 
    host:'localhost'
})

module.exports = sequelize;