const Card = require('../models/card');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');

// Получение карточек
function getCard(req, res, next) {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => next(err));
}

// Создание карточки
function createCard(req, res, next) {
  const { name, link } = req.body;
  const { _id } = req.user;

  Card.create({ name, link, owner: _id })
    .then((cardData) => {
      res.send(cardData);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const errObject = Object.keys(err.errors).join(', ');

        next(new NotFoundError(`Некорректные данные: ${errObject}`));
        return;
      }
      next(err);
    });
}

// Удаление карточки
function deleteCard(req, res, next) {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Запрашиваемая карточка не найдена');
      }
      if (req.user._id === card.owner.toString()) {
        return card.remove()
          .then(() => {
            res.send(card);
          });
      }
      throw new ForbiddenError('Нет доступа к удалению чужой карточки');
    }).catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Некорректный id карточки'));
        return;
      }
      next(err);
    });
}

// Добавление лайка
function addLike(req, res, next) {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((cardData) => {
      if (!cardData) {
        next(new NotFoundError('Запрашиваемая карточка не найдена'));
        return;
      }
      res.send(cardData);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Некорректный id карточки'));
        return;
      }
      next(err);
    });
}

// Удаление лайка
function deleteLike(req, res, next) {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((cardData) => {
      if (!cardData) {
        next(new NotFoundError('Запрашиваемая карточка не найдена'));
        return;
      }
      res.send(cardData);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Некорректный id карточки'));
        return;
      }
      next(err);
    });
}

module.exports = {
  getCard,
  createCard,
  deleteCard,
  addLike,
  deleteLike,
};
