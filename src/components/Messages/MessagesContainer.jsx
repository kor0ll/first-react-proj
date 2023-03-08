import {addMessage} from "../../redux/messagesReducer";
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

const MessagesContainer = compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Messages);

export default MessagesContainer;