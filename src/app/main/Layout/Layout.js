import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routesConfig from "../../config/routesConfig";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

const Layout = ({ store, dispatch }) => {
    return (
        <div className="layout">
            <Navbar store={store} />
            <div className="fill"></div>
            <main>
                <Routes>
                    {routesConfig.map(route => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                element={
                                    <Suspense fallback={<h3>Cargando...</h3>}>
                                        <route.component
                                            store={store}
                                            dispatch={dispatch}
                                        />
                                    </Suspense>
                                }
                            />
                        );
                    })}
                    <Route path="home" exact element={<Home />} />
                    <Route
                        path=""
                        exact
                        element={<Navigate replace to="home" />}
                    />
                    <Route
                        path="*"
                        exact
                        element={<Navigate replace to="home" />}
                    />

                    <Route
                        path="*"
                        element={<Navigate replace to="avatar-gen" />}
                    />
                </Routes>
            </main>
        </div>
    );
};

export default Layout;
