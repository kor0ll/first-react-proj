import s from "./Header.module.css";
import React from 'react';
import logo from './../../assets/images/logo.png';



function Header() {
    return (
        <header className={s.header}>
          <img className={s.header_img} src={logo} alt="логотип" />
        </header>
    )
};

export default Header;