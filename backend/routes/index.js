const router = require('express').Router();

const userRouter = require('./user');
const cardRouter = require('./card');

module.exports = router.use(
  userRouter,
  cardRouter,
);
