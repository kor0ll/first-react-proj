import s from "./Messages.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Messages = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {props.dialogsData.map((d) => <Dialog id={d.id} name={d.name} key={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesData.map((m) => <Message text={m.text} key={m.id}/>)}
                <MessageForm  addMessage={props.addMessage}/>
            </div>
        </div>
    )
}


const MessageForm = (props) => {
    return (
        <Formik
            initialValues={{ message: '' }}
            onSubmit={(values, { setSubmitting }) => {
                props.addMessage(values.message);
                setSubmitting(false);
                values.message = '';
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type='input' name="message"/>
                    <button type="submit" disabled={isSubmitting}>
                        Отправить
                    </button>
                </Form>
            )}
        </Formik>
    )
}



export default Messages;