var initModels = require("../models/init-models"); 
const sequelize = require('../database/dbConnect')
var models = initModels(sequelize);

let spaces = [];
models.space.findAll().then(result => {
    spaces = result;
    console.log('Inside then ------>',spaces);
}).catch(err =>{
    console.log(err);
});

console.log('Outside then ------>',spaces);
