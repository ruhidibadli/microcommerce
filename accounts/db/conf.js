const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('postgres://testadmin:testuser@db:8081/test_db');

const connectDb = async () =>{
    try{
        await sequelize.authenticate();
        console.log("Successfully connected to DB");
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { sequelize, connectDb};