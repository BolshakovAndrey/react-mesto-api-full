import {useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacesPopup(props) {

    // Стейты для имени и ссылки на картинку
    const [name, setName] = useState([]);
    const [link, setLink] = useState([]);

    // Обработчик установки названия места
    function handleCardName(event) {
        setName(event.target.value)
    }

    // Обработчик установки картинки (ссылки на картинку)
    function handleCardLink(event) {
        setLink(event.target.value)
    }

    // Обработчик сабмита формы popup добавления карточки
    function handleSubmit(event) {
        event.preventDefault();

        props.onAddPlace({
            name: name,
            link: link
        })
    }

    useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen])

    return (
        <PopupWithForm
            name='add'
            title="Новое место"
            buttonText='Создать'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input"
                id='popup-add-name'
                maxLength="40" minLength="2"
                name="name"
                placeholder="Название"
                required
                type="text"
                value={name}
                onChange={handleCardName}
            />
            <p className="popup__input-error" id="popup-add-name-error"/>
            <input
                className="popup__input"
                id='link'
                maxLength="200" minLength="2"
                name="link"
                placeholder="Ссылка на картинку"
                required
                type="url"
                value={link}
                onChange={handleCardLink}
            />
            <p className="popup__input-error" id="link-error"/>
        </PopupWithForm>
    )
}

export default AddPlacesPopup;