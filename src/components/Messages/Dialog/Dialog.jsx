import s from "./../Messages.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    let path = "/messages/" + props.id;
    return (
        <NavLink to={path} className = { navData => navData.isActive ? s.active : s.dialog_item }>{props.name}</NavLink>
    )
}

export default Dialog;