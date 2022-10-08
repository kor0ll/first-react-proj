import s from "./../Messages.module.css";

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export default Message;