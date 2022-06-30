import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({card, onClick, onCardLike, onCardDelete}) {

    //Подписка на контекст CurrentUserContext
    const currentUser = useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwned = card.owner._id === currentUser._id;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `card__delete-btn ${isOwned ? '' : 'card__delete-btn_type_hidden'}`
    );

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `card__like ${isLiked ? 'card__like_active' : ''}`;

    function handleClick() {
        onClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    return (
        <li className="cards__item">
            <figure className="card">
                <img onClick={handleClick}
                     alt={`Изображение ${card.name}`}
                     className="card__image"
                     src={card.link}/>
                <div className="card__wrapper">
                    <h2 className="card__title">{card.name}</h2>
                    <div className="card__like-container">
                        <button className={cardLikeButtonClassName}
                                aria-label="Поставить лайк"
                                type="button"
                                onClick={handleLikeClick}
                        >
                        </button>
                        <span className="card__like-counter">{card.likes.length}</span>
                    </div>
                </div>
                <button className={cardDeleteButtonClassName}
                        type="button"
                        aria-label="Удалить фотографию"
                        onClick={handleDeleteClick}>
                </button>
            </figure>
        </li>
    );
}

export default Card