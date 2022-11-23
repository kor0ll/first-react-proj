import s from "./Messages.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {addMessageAC, updateNewMessageTextAC} from "./../../redux/messagesReducer";
import React from "react";


const Messages = (props) => {

    let textMessage = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addMessageAC());
    }
    let updateMessageText = () => {
        let text = textMessage.current.value;
        props.dispatch(updateNewMessageTextAC(text));
    }

    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {props.state.dialogsData.map( (d) =>  <Dialog id={d.id} name={d.name} /> )}
            </div>
            <div className={s.messages}>
                {props.state.messagesData.map( (m) =>  <Message text={m.text} /> )}
                <div className={s.post_wrapper}>
                    <textarea cols="30" rows="10" placeholder="Напишите что-нибудь..." ref={ textMessage } 
                    onChange={ updateMessageText } value={props.state.newMessageText}></textarea>
                    <button onClick={ addNewMessage }>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;