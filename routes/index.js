// routes/index.js
const express = require('express');
const caloriasRouter = require("./calorias.routes");
const productsRouter = require('./products.routes');
const authRouter = require('./auth.routes')
const caloriesPrivateRouter = require("./caloriesprivate.routes"); 
const indexRouter = express.Router();

module.exports = () => {
  indexRouter.use("/calorias", caloriasRouter);
  indexRouter.use('/products', productsRouter);
  indexRouter.use('/auth', authRouter);
  indexRouter.use("/caloriesprivate", caloriesPrivateRouter); 
  

  return indexRouter;
};
