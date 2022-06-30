import {useContext, useEffect, useState} from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    //Подписываемся на контекст
    const currentUser = useContext(CurrentUserContext);

    //Cтейты имени и описания профиля
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [props.isOpen, currentUser]);

    //Функция для изменения имени через поле ввода
    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    //Функция для изменения описания профиля через поле ввода
    const handleDescriptionChange = (evt) => {
        setDescription(evt.target.value);
    }

    //Обработчик сабмита формы
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name: name,
            about: description
        });
    }

    return (
        <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            buttonText={props.buttonText}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
            onClose={props.onClose}
        >
            <input className="popup__input"
                   id='popup-name'
                   maxLength="40" minLength="2"
                   name="name"
                   type="text"
                   placeholder='Имя'
                   required
                   onChange={handleNameChange}
                   value={name}
            />
            <p className="popup__input-error" id="popup-name-error"/>
            <input
                    className="popup__input"
                    id='popup-about'
                    maxLength="200" minLength="2"
                    name="about"
                    type="text"
                    placeholder='Описание'
                    required
                    value={description}
                    onChange={handleDescriptionChange}
            />
            <p className="popup__input-error" id="popup-about-error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup;

