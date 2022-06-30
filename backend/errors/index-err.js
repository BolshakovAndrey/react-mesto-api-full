const BadRequestError = require('./bad-request-err');
const UnauthorizedError = require('./unauthorized-err');
const ForbiddenError = require('./forbidden-err');
const NotFoundError = require('./not-found-err');
const ConflictError = require('./conflict-err');

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
};
