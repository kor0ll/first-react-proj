let initialState = {
    dialogsData: [
        { id: 1, name: 'Maxim' },
        { id: 2, name: 'Alina' },
        { id: 3, name: 'Maria' },
        { id: 4, name: 'Artem' },
        { id: 5, name: 'Oleg' },
    ],
    messagesData: [
        { id: 1, text: 'Hi!' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'Yoy' },
        { id: 4, text: 'Yo' },
        { id: 5, text: 'Oleg ti dolbaeb' },
    ],
    newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD-MESSAGE': {
            let message = {
                id: state.messagesData.length + 1,
                text: state.newMessageText
            };
            //выполняем поверхностную и глубокую копию state, чтобы вернуть не ссылку на тот же объект state (не перерисует тогда),
            //а на новый объект
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];

            stateCopy.messagesData.push(message);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            //выполняем поверхностную и глубокую копию state, чтобы вернуть не ссылку на тот же объект state (не перерисует тогда),
            //а на новый объект
            let stateCopy = {...state};

            stateCopy.newMessageText = action.newText;
            return stateCopy;
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