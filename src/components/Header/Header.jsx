import s from "./Header.module.css";
import React from 'react';



function Header() {
    return (
        <header className={s.header}>
          <img className={s.header_img} src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" alt="логотип" />
        </header>
    )
};

export default Header;