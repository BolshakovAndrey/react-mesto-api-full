const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
// errors
const ErrorTypes = require('../utils/error-types');
const StatusCodes = require('../utils/status-codes');
const StatusMessages = require('../utils/status-messages');
const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  ConflictError,
} = require('../errors/index-err');
const { JWT_SECRET } = require('../utils/constants');

// аутентификация пользователей и создание JWT токена
module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      // создадим токен
      const token = jwt.sign(
        { _id: user._id },
        JWT_SECRET,
        { expiresIn: '7d' },
      );
      // вернём токен
      res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: true,
      })
        .send({ token });
    })
    .catch((err) => {
      throw new UnauthorizedError(`${err.message}`);
    })
    .catch(next);
};

// возвращает всех пользователей
module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(next);
};

// возвращает информацию о текущем пользователе
module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(StatusMessages.NOT_FOUND);
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.name === ErrorTypes.CAST) {
        throw new BadRequestError(StatusMessages.INVALID_ID);
      }
      next(err);
    })
    .catch(next);
};

// возвращает пользователя по _id
module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(StatusMessages.NOT_FOUND);
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.name === ErrorTypes.CAST) {
        throw new BadRequestError(StatusMessages.INVALID_ID);
      }
      next(err);
    })
    .catch(next);
};

// создаёт пользователя
module.exports.createUser = (req, res, next) => {
  const {
    email, name, about, avatar,
  } = req.body;

  // хэшируем пароль
  bcrypt.hash(req.body.password, 10)
    .then((hash) => {
      User.create({
        email, password: hash, name, about, avatar,
      })
        .then((user) => res
          .status(StatusCodes.CREATED)
          .send(user))
        // eslint-disable-next-line consistent-return
        .catch((err) => {
          if (err.name === ErrorTypes.MONGO && err.code === StatusCodes.MONGO_ERROR) {
            next(new ConflictError(StatusMessages.CONFLICT));
          }
          if (err.name === ErrorTypes.VALIDATION) {
            next(new BadRequestError(`Переданы некорректные данные при создании пользователя: ${err}`));
          } else {
            next(err);
          }
        });
    });
};

// обновляет профиль
module.exports.updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new NotFoundError(StatusMessages.NOT_FOUND);
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.name === ErrorTypes.CAST) {
        throw new BadRequestError(StatusMessages.INVALID_ID);
      }
      if (err.name === ErrorTypes.VALIDATION) {
        throw new BadRequestError(`Переданы некорректные данные при обновлении профиля: ${err}`);
      }
      next(err);
    })
    .catch(next);
};

// обновляет аватар
module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new NotFoundError(StatusMessages.NOT_FOUND);
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.name === ErrorTypes.CAST) {
        throw new BadRequestError(StatusMessages.INVALID_ID);
      }
      if (err.name === ErrorTypes.VALIDATION) {
        throw new BadRequestError(`Переданы некорректные данные при обновлении аватара: ${err}`);
      }
      next(err);
    })
    .catch(next);
};
