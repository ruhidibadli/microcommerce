'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activity.init({
    userName: DataTypes.STRING,
    detail: DataTypes.STRING,
    activity_type: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
    activity_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};