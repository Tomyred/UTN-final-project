import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, resetRegister } from "../store/actions";
import RegisterContent from "./RegisterContent";

const Register = ({ dispatch, store }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ userName: "", password: "" });
    const [repatedPassword, setRepatedPassword] = useState("");
    const [error, setError] = useState({});
    const setUserInfo = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const { saved, savingErrorMessage, saving } = store.auth.register;

    useEffect(() => {
        if (saved) {
            setTimeout(() => {
                dispatch(resetRegister());
                setUser({ userName: "", password: "" });
                navigate(-1);
            }, 2000);
        }
    }, [saved, dispatch, navigate]);

    const validatePassword = e => {
        setRepatedPassword(e.target.value);
        if (e.target.value !== user.password) {
            setError({ ...error, matchError: "Las contraseñas no coinciden" });
        } else {
            setError({});
        }
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        if (error.matchError) {
            return;
        }

        dispatch(register(user, repatedPassword));
    };

    return (
        <div className="login__component">
            <div className="login__container">
                <RegisterContent
                    saved={saved}
                    onSubmitHandler={onSubmitHandler}
                    setUserInfo={setUserInfo}
                    validatePassword={validatePassword}
                    error={error}
                    saving={saving}
                    savingErrorMessage={savingErrorMessage}
                />
            </div>
        </div>
    );
};

export default Register;
