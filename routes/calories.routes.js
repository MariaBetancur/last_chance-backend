const express = require('express');
const { calories: controller } = require('../controllers');
const caloriesRouter = express.Router();

// Cambia la ruta a POST
caloriesRouter.post('/daily', controller.getDailyCaloriesAndUnrecommendedFoods);

module.exports = caloriesRouter;
