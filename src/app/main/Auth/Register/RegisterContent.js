import React from "react";
import { Link } from "react-router-dom";

const RegisterContent = ({
    saved,
    onSubmitHandler,
    setUserInfo,
    validatePassword,
    error,
    savingErrorMessage,
    saving,
}) => {
    if (saving) {
        return (
            <div>
                <h2>Creando usuario...</h2>
            </div>
        );
    }
    if (saved) {
        return (
            <div>
                <h2>Usuario creado</h2>
                <p>Redireccionando...</p>
            </div>
        );
    }
    return (
        <>
            <h2>Registrarse</h2>
            <form onSubmit={onSubmitHandler} className="login">
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
                    {error.matchError ?? error.matchError}
                </span>

                <button type="submit">Registrarse</button>
                <span style={{ color: "red", fontSize: 15 }}>
                    {" "}
                    {savingErrorMessage ?? savingErrorMessage}{" "}
                </span>
            </form>
            <div>
                <p>
                    ¿Ya tenes una cuenta? <Link to="/">Iniciar sesión</Link>
                </p>
            </div>
        </>
    );
};

export default RegisterContent;
