import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingScreen from "../../pages/LoadingScreen/LoadingScreen";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = ({ store, dispatch }) => {
    const loggingIn = store.auth.logIn.logginIn;
    if (loggingIn) {
        return <LoadingScreen />;
    }
    return (
        <Routes>
            <Route
                path=""
                element={<Login store={store} dispatch={dispatch} />}
            />
            <Route
                path="register"
                element={<Register store={store} dispatch={dispatch} />}
            />
            <Route path="*" element={<Navigate replace to="" />} />
        </Routes>
    );
};

export default Auth;
