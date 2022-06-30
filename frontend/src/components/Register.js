import {useState} from 'react';
import { Link } from 'react-router-dom';

const Register = ({onRegister}) => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = state;
        if (onRegister && email && password) {
            onRegister(email, password)
        }
    }

    return (
        <div className="form form_type_auth">
            <h2 className="form__heading">
                Регистрация
            </h2>
            <form onSubmit={handleSubmit} className="popup__fieldset" name="signup-form">
                <input className="form__item"
                       id="email"
                       name="email"
                       type="email"
                       value={state.email}
                       onChange={handleChange}
                       placeholder="Email"
                       required
                />
                <p className="form__error" id="email-error"/>
                <input className="form__item"
                       id="password"
                       name="password"
                       type="password"
                       value={state.password}
                       onChange={handleChange}
                       placeholder="Пароль"
                       required
                />
                <p className="form__error" id="email-error"/>
                <button type="submit"
                        onSubmit={handleSubmit}
                        className="popup__btn-submit popup__btn-submit_type_auth">
                    Зарегистрироваться
                </button>
                <p className="form__text">
                    Уже зарегистрированы?
                    <Link to="/sign-in" className="form__link"> Войти</Link>
                </p>
            </form>
        </div>
    );
}


export default Register;
