import React from "react";
import { Link } from "react-router-dom";
import { navigationConfig } from "../../../config/navigationConfig";
import { logOut } from "../../Auth/store/actions";

const Navbar = ({ store, dispatch }) => {
    const user = store.auth.logIn.userInfo;
    return (
        <nav className="navbar">
            <div className="userInfo">
                <img className="profilePic" src={user.profilePic} alt="" />
                <span>
                    Bienvenido/a{" "}
                    <span style={{ color: "#FF00FF" }}>{user.userName}</span>
                </span>
            </div>

            <div className="navigation">
                {navigationConfig.map(nav => {
                    return (
                        <Link key={nav.id} to={nav.to}>
                            {nav.label}
                        </Link>
                    );
                })}
                <span
                    onClick={() => dispatch(logOut())}
                    className="logout"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                >
                    Salir
                    <span
                        style={{ marginLeft: "5px" }}
                        className="material-icons md-36 action__button"
                    >
                        logout
                    </span>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
