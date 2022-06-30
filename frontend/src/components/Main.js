import {useContext} from 'react'
import Card from "./Card";
import Loader from './Loader'
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
    //Подписка на контекст CurrentUserContext
    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img
                        alt="Аватар профиля"
                        src={`${currentUser.avatar}`}
                        className="profile__avatar"
                    />
                    <button
                        aria-label="Обновить аватар"
                        className="profile__avatar-btn"
                        type="button"
                        onClick={props.onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <p className="profile__about">{currentUser.about}</p>
                    <button
                        className="profile__edit-btn page__button"
                        title="Редактировать профиль"
                        type="button"
                        onClick={props.onEditProfile}
                    />
                </div>
                <button
                    className="profile__add-btn page__button"
                    title="Добавить новую фотографию"
                    type="button"
                    onClick={props.onAddPlace}
                />
            </section>
            <section className="cards">
                {props.isLoading
                    ? <Loader/>
                    : <ul className="cards__list">
                        {props.cards.map((card) => (
                            <Card
                                key={card._id}
                                card={card}
                                onClick={props.onCardClick}
                                onCardLike={props.onCardLike}
                                onCardDelete={props.onCardDelete}
                            />
                        ))}
                    </ul>
                }
            </section>
        </main>
    );
}

export default Main;