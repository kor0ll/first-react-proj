import s from "./../Messages.module.css";
import React from 'react';

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export default Message;