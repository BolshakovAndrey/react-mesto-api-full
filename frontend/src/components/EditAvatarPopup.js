import {useContext, useEffect, useRef} from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {

    //Подписываемся на контекст
    const currentUser = useContext(CurrentUserContext);

    // Записываем объект, возвращаемый хуком, в переменную
    const avatarRef = useRef('');

    // Установка аватара пользователя
    useEffect(() => {
        avatarRef.current.value = currentUser.avatar;
    }, [currentUser])

    // Очистка поля для ввода url аватара после закрытия popup
    useEffect(() => {
        avatarRef.current.value = '';
    }, [props.isOpen])

    //Обработчик сабмита формы (обновление аватарки)
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input"
                id="avatar-link"
                name="avatarLink"
                placeholder="Ссылка на картинку"
                required
                type="url"
                ref={avatarRef}
            />
            <p className='popup__input-error' id='avatar-link-error'/>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;