const StatusCodes = require('../utils/status-codes');
const StatusMessages = require('../utils/status-messages');

module.exports = ((err, req, res, next) => {
  const { statusCode = StatusCodes.DEFAULT } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === StatusCodes.DEFAULT
        ? StatusMessages.DEFAULT
        : err.message,
    });
  next();
});
