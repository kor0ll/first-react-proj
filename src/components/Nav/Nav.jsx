import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import React from 'react';

function Nav() {
    return (
        <nav>
          <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
          <NavLink to="/messages" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
          <a>News</a>
          <a>Music</a>
          <a>Settings</a>
        </nav>
    )
};

export default Nav;