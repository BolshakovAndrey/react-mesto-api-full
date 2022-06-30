import React from 'react';

function ImagePopup({card, onClose}) {
    return (
        <section className={`popup popup_type_show-img ${card && 'popup_opened'}`}>
            <figure className="popup__frame">
                <button aria-label="Закрыть форму"
                        className="popup__btn-close popup__btn-close_type_show-image"
                        type="button"
                        onClick={onClose}>
                </button>
                <img alt={card ? card.name: ""}
                     className="popup__foto"
                     src={card ? card.link : ""}/>
                <p className="popup__image-title">{card ? card.name: ""}</p>
            </figure>
        </section>
    )
}

export default ImagePopup;