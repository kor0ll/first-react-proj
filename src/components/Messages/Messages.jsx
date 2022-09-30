import s from "./Messages.module.css";
import { NavLink } from "react-router-dom";

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Dialog = (props) => {
    let path = "/messages/" + props.id;
    return (
        <NavLink to={path} className = { navData => navData.isActive ? s.active : s.dialog_item }>{props.name}</NavLink>
    )
}

let dialogsData = [
    {id: 1, name: 'Maxim'},
    {id: 2, name: 'Alina'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Artem'},
    {id: 5, name: 'Oleg'},
];

let messagesData = [
    {id: 1, text: 'Hi!'},
    {id: 2, text: 'How are you?'},
    {id: 3, text: 'Yoy'},
    {id: 4, text: 'Yo'},
    {id: 5, text: 'Oleg ti dolbaeb'},
];

let dialogsElements = dialogsData.map( (d) =>  <Dialog id={d.id} name={d.name} /> );
let messagesElements = messagesData.map( (m) =>  <Message text={m.text} /> );

const Messages = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages;