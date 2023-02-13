import {addMessageAC, updateNewMessageTextAC} from "../../redux/messagesReducer";
import React from "react";
import Messages from "./Messages";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messagesData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => { 
           return dispatch(addMessageAC()) 
        },
        updateNewMessageText: (text) => {
            return dispatch(updateNewMessageTextAC(text)) 
        }
    }
}

const MessagesContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);

export default MessagesContainer;