let initialState = {
    dialogsData: [
        { id: 1, name: 'Maxim' },
        { id: 2, name: 'Alina' },
        { id: 3, name: 'Maria' },
        { id: 4, name: 'Artem' },
    ],
    messagesData: [
        { id: 1, text: 'Hi!' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'Yoy' },
        { id: 4, text: 'Yo' },
        { id: 5, text: 'Oleg ti dolbaeb' },
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD-MESSAGE': {
            let message = {
                id: state.messagesData.length + 1,
                text: action.message
            };
            //выполняем поверхностную и глубокую копию state, чтобы вернуть не ссылку на тот же объект state (не перерисует тогда),
            //а на новый объект
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];

            stateCopy.messagesData.push(message);
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessage = (message) => {
    let action = {
        type: ADD_MESSAGE,
        message: message
    };
    return action;
}

export default messagesReducer;