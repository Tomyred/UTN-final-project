import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({ userName: "", password: "" });
    const [repatedPassword, setRepatedPassword] = useState("");
    const [error, setError] = useState({});
    const setUserInfo = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const validatePassword = e => {
        setRepatedPassword(e.target.value);
        if (e.target.value !== user.password) {
            setError({ ...error, match: "Las contraseñas no coinciden" });
        } else {
            setError({});
        }
    };

    return (
        <div className="login__component">
            <div className="login__container">
                <h2>Registrarse</h2>
                <div className="login">
                    <input
                        onChange={setUserInfo}
                        name="userName"
                        type="text"
                        placeholder="Usuario"
                    />

                    <input
                        type="password"
                        onChange={setUserInfo}
                        name="password"
                        placeholder="Contraseña"
                    />

                    <input
                        type="password"
                        onChange={validatePassword}
                        name="repPassword"
                        placeholder="Repetir contraseña"
                    />
                    <span style={{ color: "red", fontSize: 10 }}>
                        {error.match ?? error.match}
                    </span>

                    <button onClick={() => console.log(user)}>
                        Registrarse
                    </button>
                </div>
                <div>
                    <p>
                        ¿Ya tenes una cuenta? <Link to="/">Iniciar sesión</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
