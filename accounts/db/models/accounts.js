const { sequelize, connectDb } = require("../conf.js");
const { DataTypes, Deferrable } = require("sequelize");


var User = sequelize.define('User', {
    user_id :{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type:DataTypes.STRING,
        validate:{
            max:155
        }
    },
    email:{
        type:DataTypes.STRING
    },
    password:DataTypes.STRING,
    first_name:DataTypes.STRING,
    last_name:DataTypes.STRING,
    role:DataTypes.STRING,
    is_active:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
});


(async () =>{
    await sequelize.sync();
})();

module.exports = User;