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

router.get('/clothes/:id', async (req, res, next) => {
  try {

    const clothesItem = await ClothesModel.findOne({
      where: { id: +req.params.id },
    });
    res.status(200).send(clothesItem);
  } catch (err) {
    next(err.message);
  }
});

router.post('/clothes', async (req, res, next) => {
  try {
    const newClothes = await ClothesModel.create(req.body);
    res.status(201).send(newClothes);
  } catch (err) {
    next(err.message);
  }
});

router.put('/clothes/:id', async (req, res, next) => {
  try {
    const clothesItem = await ClothesModel.update(
      req.body,
      {
        where: { id: +req.params.id },
      });
    res.status(202).send(clothesItem);
  } catch (err) {
    next(err.message);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {
    await ClothesModel.destroy(
      {
        where: { id: +req.params.id },
      });
    res.status(204).send('successfully deleted');
  } catch (err) {
    next(err.message);
  }
});

module.exports = router;
