'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class customers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    customers.init(
        {
            //  tables here
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            mobile: DataTypes.STRING,
            location: DataTypes.STRING,
            isDeleted: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'customers',
        }
    );
    return customers;
};