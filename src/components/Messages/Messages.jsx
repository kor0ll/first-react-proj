import s from "./Messages.module.css";
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {props.state.dialogsData.map( (d) =>  <Dialog id={d.id} name={d.name} /> )}
            </div>
            <div className={s.messages}>
                {props.state.messagesData.map( (m) =>  <Message text={m.text} /> )}
                <div className={s.post_wrapper}>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Напишите что-нибудь..."></textarea>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;