import s from "./Header.module.css";
import React from 'react';
import logo from './../../assets/images/logo.png';
import { NavLink } from "react-router-dom";



function Header(props) {
    return (
        <header className={s.header}>
          <img className={s.header_img} src={logo} alt="логотип" />
          
          {props.isAuth ?  <div className={s.login}>{props.login} - <button onClick={props.logoutThunk}>Log out</button></div>
           : <NavLink to='/login' className={s.login}>Login</NavLink>}
        </header>
    )
};

export default Header;