// Валидация форм
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-save_inactive',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active',
    controlSelectorClass: '.popup__fieldset',
};

// Найдем все попапы
export const popups = document.querySelectorAll('.popup');
export const profile = document.querySelector('.profile');
// Выбор кнопки редактирования профиля.
export const profileEditBtn = document.querySelector('.profile__edit-btn');

export const popupProfile = document.querySelector('.popup_type_profile');
export const popupProfileCloseButton = popupProfile.querySelector('.popup__btn-close');
// // Находим форму в DOM (форма - это popup профиля).
export const formElement = popupProfile.querySelector('.popup__form');
// Находим поля формы ввода в DOM. При открытии popup будут заполняться значениями полей из профиля.
export const nameInput = formElement.querySelector('#popup-name');
export const jobInput = formElement.querySelector('#popup-about');
// Выбираем элементы, куда должны быть вставлены значения полей (в профиле).
export const profileName = profile.querySelector('.profile__name');
export const profileAbout = profile.querySelector('.profile__about');
// Кнопка "submit" в открытом попапе
export const submitBtnProfile = popupProfile.querySelector('.popup__btn-save');
// Создаем экземпляр класса для формы редактирования профиля
// Находим карточки и шаблон
export const cardsList = document.querySelector('.cards__list');
// export const cardsList = document.querySelector('.cards');
export const cardTemplateElement = document.querySelector('.card-template');
// popup "добавления карточки"
export const popupAddSelector = '.popup_type_add';
export const popupAdd = document.querySelector('.popup_type_add');
export const openPopupAddButton = document.querySelector('.profile__add-btn');
export const closePopupAddButton = popupAdd.querySelector('.popup__btn-close');
export const popupAddForm = popupAdd.querySelector('.popup__form');
export const popupAddName = popupAddForm.querySelector('#popup-add-name');
export const popupAddLink = popupAddForm.querySelector('#link');
export const submitBtnAdd = popupAdd.querySelector('.popup__btn-save');
// Создаем экземпляр класса для формы добавления карточки
// popup "просмотр фото"
export const popupImage = document.querySelector('.popup_type_show-img');
export const popupImgText = popupImage.querySelector('.popup__image-title');
export const popupImgFoto = popupImage.querySelector('.popup__foto');
// Кнопка закрытия в popup добавления карточки
export const popupImgCloseButton = popupImage.querySelector('.popup__btn-close');
export const avatarImg = document.querySelector('.profile__avatar');

export const popupAvatarSelector = '.popup_type_avatar';
export const popupAvatarEdit = document.querySelector('.popup_type_avatar');
export const avatarForm = popupAvatarEdit.querySelector('.popup__form');
export const avatarEditButton = document.querySelector('.profile__avatar-btn');

export const popupDeleteSelector = '.popup_type_delete';
export const controlSelectorClass = '.popup__fieldset';
