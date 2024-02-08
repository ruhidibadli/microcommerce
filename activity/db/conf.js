const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('postgres://testadmin:testuser@activity_db:5432/test_db');

const connectDb = async () =>{
    try{
        await sequelize.authenticate();
        console.log("Successfully connected to Activity DB");
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { sequelize, connectDb};