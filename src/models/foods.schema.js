'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const foodSchema = require('./foods.schema');

const DATABASE_URL = process.env.DATABASE_URL;


const SQLDb = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl:{
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const FoodModel = foodSchema(SQLDb, DataTypes);

module.exports = {
  SQLDb,
  FoodModel,
};
