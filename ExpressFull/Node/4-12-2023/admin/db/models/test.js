'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

class Test extends Model { }
Test.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  mobile: DataTypes.STRING,
  location: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Test',
});

module.exports = Test