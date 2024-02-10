'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("users", {
      user_id :{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      username:{
          type:Sequelize.STRING,
          validate:{
              max:155
          }
      },
      email:{
          type:Sequelize.STRING
      },
      password:Sequelize.STRING,
      first_name:Sequelize.STRING,
      last_name:Sequelize.STRING,
      role:Sequelize.STRING,
      is_active:{
          type:Sequelize.BOOLEAN,
          defaultValue:false
      }
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
