'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const foodSchema = require('./food.schema');
const clothesSchema = require('./clothes.schema');

const DATABASE_URL = process.env.DATABASE_URL;


const SQLDb = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const FoodModel = foodSchema(SQLDb, DataTypes);
const ClothesModel = clothesSchema(SQLDb, DataTypes);
module.exports = {
  SQLDb,
  FoodModel,
  ClothesModel,
};