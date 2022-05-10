import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = ({ dispatch }) => {
    return (
        <Routes>
            <Route path="" element={<Login dispatch={dispatch} />} />
            <Route path="register" element={<Register dispatch={dispatch} />} />
            <Route path="*" element={<Navigate replace to="" />} />
        </Routes>
    );
};

export default Auth;
