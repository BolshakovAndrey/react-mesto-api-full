import {useState} from 'react';

const Login = ({onLogin}) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = inputs
        if (onLogin && email && password) {
            onLogin(email, password)
        }
    }

    return (
        <div onSubmit={handleSubmit}
             className="form form_type_auth">
            <h2 className="form__heading">
                Вход
            </h2>
            <form className="popup__fieldset">
                <input className="form__item"
                       id="email"
                       required name="email"
                       type="email"
                       value={inputs.email}
                       onChange={handleChange}
                       placeholder="Email"
                />
                <p className="form__error" id="email-error"/>
                <input className="form__item"
                       id="password"
                       required name="password"
                       type="password"
                       value={inputs.password}
                       onChange={handleChange}
                       placeholder="Пароль"
                />
                <p className="form__error" id="email-error"/>
                <button type="submit"
                        className="popup__btn-submit popup__btn-submit_type_auth">
                    Войти
                </button>

            </form>
        </div>
    )
}

export default Login;