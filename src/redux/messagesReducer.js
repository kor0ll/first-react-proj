const messagesReducer = (state, action) => {
    switch(action.type) {
        case 'ADD-MESSAGE': {
            let message = {
                id: state.messagesData.length + 1,
                text: state.newMessageText
            };
            state.messagesData.push(message);
            state.newMessageText = '';
            return state;
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            state.newMessageText = action.newText;
            return state;
        }
        default: {
            return state;
        }
    }
}

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageAC = () => {
    let action = {
        type: ADD_MESSAGE
    };
    return action;
}
export const updateNewMessageTextAC = (text) => {
    let action = {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
    return action;
}

export default messagesReducer;