'use strict';

const express = require('express');
const { FoodModel } = require('../models');

const router = express.Router();

router.get('/food', async (req, res, next) => {
  try {
    const clothes = await FoodModel.findAll();
    res.status(200).send(clothes);
  } catch (err) {
    next(err.message);
  }
});

router.get('/food/:id', async (req, res, next) => {
  try {

    const clothesItem = await FoodModel.findOne({
      where: { id: +req.params.id },
    });
    res.status(200).send(clothesItem);
  } catch (err) {
    next(err.message);
  }
});

router.post('/food', async (req, res, next) => {
  try {
    const newClothes = await FoodModel.create(req.body);
    res.status(200).send(newClothes);
  } catch (err) {
    next(err.message);
  }
});

router.put('/food/:id', async (req, res, next) => {
  try {
    const foodItem = await FoodModel.update(
      req.body,
      {
        where: { id: +req.params.id },
      });
    res.status(200).send(foodItem);
  } catch (err) {
    next(err.message);
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    await FoodModel.destroy(
      {
        where: { id: +req.params.id },
      });
    res.status(200).send('successfully deleted');
  } catch (err) {
    next(err.message);
  }
});

module.exports = router;
