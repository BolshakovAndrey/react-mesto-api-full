const mongoose = require('mongoose');
const { isURL } = require('validator');

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Поле название должно быть заполнено'],
      minLength: [2, 'Минимальное количество букв в названии - 2'],
      maxLength: [30, 'Минимальное количество букв в названии - 30'],
    },
    link: {
      type: String,
      required: [true, 'Добавьте URL карточки'],
      validate: {
        validator: (v) => isURL(v),
        message: 'Некорректный адрес картинки',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('card', cardSchema);
