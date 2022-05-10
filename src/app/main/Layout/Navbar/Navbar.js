import React from "react";
import { Link } from "react-router-dom";
import { navigationConfig } from "../../../config/navigationConfig";

const Navbar = ({ store }) => {
    const user = store.auth.logIn.userInfo;
    return (
        <nav className="navbar">
            <div className="userInfo">
                <img className="profilePic" src={user.profilePic} alt="" />
                <span>Bienvenido/a {user.userName}</span>
            </div>

            <div className="navigation">
                {navigationConfig.map(nav => {
                    return (
                        <Link key={nav.id} to={nav.to}>
                            {nav.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
