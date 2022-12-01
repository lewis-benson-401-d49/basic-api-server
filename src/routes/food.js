'use strict';

const express = require('express');
const { FoodModel } = require('../models');

const router = express.Router();

router.get('/food', async (req, res, next) => {
  try{
    const foods = await FoodModel.findAll();
    res.status(200).send(foods);
  } catch(e){
    next(e);
  }
});

router.post('/food', async (req, res, next) => {
  try {
    const newFood = await FoodModel.create(req.body);
    res.status(200).send(newFood);
  } catch(err){
    next(err.message);
  }
});

module.exports = router;
