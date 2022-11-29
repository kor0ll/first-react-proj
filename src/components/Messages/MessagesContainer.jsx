import {addMessageAC, updateNewMessageTextAC} from "../../redux/messagesReducer";
import React from "react";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let addNewMessage = () => {
        props.store.dispatch(addMessageAC());
    }
    let updateMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextAC(text));
    }

    return <Messages addMessage={addNewMessage} updateNewMessageText={updateMessageText} 
    newMessageText={state.newMessageText} messagesData={state.messagesData} dialogsData={state.dialogsData}/>
}

export default MessagesContainer;