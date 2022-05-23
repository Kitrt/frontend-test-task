import React from "react";
import {Link} from "react-router-dom";

import "./index.scss";

import {useAuth} from "../authProvider";
import {useModal} from "../modalProvider";

function Header() {
    let auth = useAuth();
    let modal = useModal();

    return (
        <div className="container">
            <div className="header">
                <div className="logo">
                    <Link to="/" className="logo__link">
                        <img src="//static.tildacdn.com/tild3638-3338-4136-b038-313132306438/Group_640.svg" alt="logo"/>
                    </Link>
                </div>

                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__item"><Link to="/news" className="menu__link">Новости</Link></li>
                    </ul>
                </nav>

                <div className="change-user">
                    {!auth?.user?.auth &&
                        <button onClick={modal.openAuthModal} className="change-user__link">Вход</button>
                    }
                    {auth?.user?.auth &&
                        <button onClick={auth.signout} className="change-user__btn">Выход</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;