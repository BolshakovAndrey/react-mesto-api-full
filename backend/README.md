[![Tests](https://github.com/BolshakovAndrey/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/BolshakovAndrey/express-mesto-gha/actions/workflows/tests-14-sprint.yml)

# Бэкенд проекта Место
### *Учебный проект от [Яндекс.Практикум](https://practicum.yandex.ru/web/)*

### Описание проекта
Место - это интерактивная страница, на которой пользователи могут делиться фотографиями, удалять их и ставить лайки.

### Функционал:
- Роуты для пользователей:
  - GET /users — возвращает всех пользователей из базы;
  - GET /users/:userId — возвращает пользователя по _id;
  - POST /users — создаёт пользователя с переданными в теле запроса name, about и avatar.

- Роуты для карточек:
  - GET /cards — возвращает все карточки из базы;
  - POST /cards — создаёт карточку с переданными в теле запроса name и link, устанавливает поле owner для карточки;
  - DELETE /cards/:cardId — удаляет карточку по _id.

### Стек технологий:
- JavaScript:
- Rest API;
- Node.js;
- Express;
- MongoDB.

### Директории
* `/controllers` – содержит файлы описания моделей пользователя и карточки;
* `/middleware` – содержит файлы промежуточного по;
* `/models` – содержит файлы описания схем пользователя и карточки;
* `/routes` — содержит описание основных роутов для пользователя и карточки;
* `/utils` — содержит коды ошибок, тексты ошибок, константы.
* `/errors` — содержит классы ошибок

### Установка и запуск проекта:
Клонировать репозиторий:

    git clone https://github.com/BolshakovAndrey/express-mesto-gha.git

Установить зависимости:

    npm install

Запустить сервер:

    npm run start

Запустить сервер с hot-reload:

    npm run dev


## Frontend проекта Место на «React»:
https://github.com/BolshakovAndrey/react-mesto-auth.git
## Демо фронтенда
https://bolshakovandrey.github.io/sign-in
