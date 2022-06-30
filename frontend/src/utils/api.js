class Api {
    constructor(data) {
        this._baseUrl = data.baseUrl;
        this._headers = data.headers;
    }

    //  Ответ
    _checkResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка отклоняем
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // Получение карточек при загрузке
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(this._checkResponseData);
    }

    // Получение данных о пользователе
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkResponseData);
    }

    // Установка данных о пользователе
    setUserInfo(userData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userData.name,
                about: userData.about
            })
        })
            .then(this._checkResponseData);
    }

    // Добавление карточки пользователем
    addUserCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._checkResponseData);
    }

    // Удаление карточки пользователем
    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponseData);
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return this.likeCard(cardId);
        } else {
            return this.dislikeCard(cardId);
        }
    }

    //   Установка лайка
    likeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(this._checkResponseData);
    }

    // Снятие лайков
    dislikeCard(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponseData)
    }

    //  Рад актирование  аватара пользователя
    updateUserAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(this._checkResponseData);
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
    headers: {
        authorization: 'de2e0062-ca04-428a-8046-f246c54d9ab2',
        'Content-Type': 'application/json'
    }
});

export default api