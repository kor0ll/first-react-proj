const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_DATA: {
            let stateCopy = {...state, ...action.data, isAuth: true};
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const setAuthUserData = (id, email, login) => {
    let data = {
        id: id,
        email: email,
        login: login
    }
    let action = {
        type: SET_AUTH_DATA,
        data: data
    }
    return action;
}

export default authReducer;