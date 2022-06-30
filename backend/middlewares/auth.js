const jwt = require('jsonwebtoken');

const { UnauthorizedError } = require('../errors/index-err');
const StatusMessages = require('../utils/status-messages');
const { JWT_SECRET } = require('../utils/constants');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError(StatusMessages.UNAUTHORIZED);
  }

  const token = req.cookies.jwt;

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError(StatusMessages.UNAUTHORIZED);
  }
  req.user = payload; // записываем пейлоад в объект запроса

  next(); // пропускаем запрос дальше
};
