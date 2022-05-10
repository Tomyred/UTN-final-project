import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./Auth/Auth";
import Layout from "./Layout/Layout";

const Main = () => {
    const store = useSelector(store => store);
    const logged = store.auth.logIn.logged;
    const dispatch = useDispatch();
    return (
        <div className="main">
            <Routes>
                <Route
                    path="/*"
                    element={
                        logged === false ? (
                            <Auth store={store} dispatch={dispatch} />
                        ) : (
                            <Layout store={store} dispatch={dispatch} />
                        )
                    }
                />
            </Routes>
        </div>
    );
};

export default Main;
