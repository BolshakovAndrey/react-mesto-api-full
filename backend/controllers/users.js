const { NODE_ENV, JWT_SECRET } = process.env;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');
const UnauthorizedError = require('../errors/UnauthorizedError');

function getUsers(req, res, next) {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
}

function getUserInfo(req, res, next) {
  User.findById(req.user._id)
    .then((userData) => {
      res.send(userData);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Некорректный id карточки'));
        return;
      }
      next(err);
    });
}

function getUserById(req, res, next) {
  User.findById(req.params.id)
    .then((userData) => {
      if (!userData) {
        throw new NotFoundError('Запрашиваемый пользователь не найден');
      }
      return res.send(userData);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Некорректный id карточки'));
        return;
      }
      next(err);
    });
}

function createUser(req, res, next) {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        name,
        about,
        avatar,
        email,
        password: hash,
      })
        .then((user) => {
          res.send({
            name,
            about,
            avatar,
            email,
            _id: user._id,
          });
        })
        .catch((err) => {
          if (err.name === 'ValidationError') {
            const errObject = Object.keys(err.errors).join(', ');
            next(new BadRequestError(`Некорректные данные: ${errObject}`));
            return;
          }
          if (err.code === 11000) {
            next(new ConflictError('Такой email уже занят'));
            return;
          }
          next(err);
        });
    }).catch(next);
}

function updateProfile(req, res, next) {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((userData) => {
      if (!userData) {
        throw new NotFoundError('Запрашиваемый пользователь не найден');
      }
      res.send(userData);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const errObject = Object.keys(err.errors).join(', ');
        next(new BadRequestError(`Некорректные данные: ${errObject}`));
        return;
      }
      if (err.name === 'CastError') {
        next(new BadRequestError('Некорректный id пользователя'));
        return;
      }
      next(err);
    });
}

function updateAvatar(req, res, next) {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((userData) => {
      if (!userData) {
        throw new NotFoundError('Запрашиваемый пользователь не найден');
      }
      res.send(userData);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Некорректная ссылка'));
        return;
      }
      if (err.name === 'CastError') {
        next(new BadRequestError('Некорректный id пользователя'));
        return;
      }
      next(err);
    });
}

function login(req, res, next) {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.send({ token })
        .end();
    })
    .catch((err) => {
      if (err.name === 'Error') {
        next(new UnauthorizedError('Некорректные данные почты или пароля'));
        return;
      }
      next(err);
    });
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
  getUserInfo,
  login,
};
