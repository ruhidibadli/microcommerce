module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        user_id :{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
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
    })

    return User;
};