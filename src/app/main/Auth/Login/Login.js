import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logIn, logInVisitor } from "../store/actions";

const Login = ({ dispatch }) => {
    const [visitorMode, setVisitorMode] = useState(false);
    const [user, setUser] = useState({ userName: "", password: "" });

    const setUserInfo = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        if (visitorMode === false) {
            dispatch(logIn(user));
        } else {
            dispatch(logInVisitor(user));
        }
    };

    return (
        <div className="login__component">
            <div className="login__container">
                <h2>Iniciar sesión</h2>
                <div className="login">
                    <input
                        onChange={setUserInfo}
                        name="userName"
                        type="text"
                        placeholder={visitorMode ? "Nombre" : "Usuario"}
                    />
                    {visitorMode ? null : (
                        <input
                            type="password"
                            onChange={setUserInfo}
                            name="password"
                            placeholder="Contraseña"
                        />
                    )}

                    <button onClick={handleClick}>
                        {" "}
                        {visitorMode ? "Entrar" : "Iniciar sesión"}{" "}
                    </button>
                </div>
                <div>
                    <p>
                        ¿No tienes una cuenta?{" "}
                        <Link to="/register">Registrate</Link>
                    </p>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 15,
                        }}
                    >
                        <input
                            style={{
                                height: 20,
                                width: 20,
                                marginRight: 5,
                            }}
                            onChange={() => setVisitorMode(!visitorMode)}
                            type="checkbox"
                        />
                        <span> Entrar como visitante </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
