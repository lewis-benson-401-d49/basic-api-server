'use strict';

const express = require('express');
const { ClothesModel } = require('../models');

const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  try {
    const clothes = await ClothesModel.findAll();
    res.status(200).send(clothes);
  } catch (err) {
    next(err.message);
  }
});

router.post('/clothes', async (req, res, next) => {
  try {
    const newClothes = await ClothesModel.create(req.body);
    res.status(200).send(newClothes);
  } catch (err) {
    next(err.message);
  }
});

module.exports = router;
