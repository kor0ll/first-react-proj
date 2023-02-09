import { AuthAPI } from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            let stateCopy = { ...state, ...action.data, isAuth: true };
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

export const authMeThunk = () => {
    return (dispatch) => {
        AuthAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let id = data.data.id;
                    let email = data.data.email;
                    let login = data.data.login;
                    dispatch(setAuthUserData(id, email, login));
                }

            })
    }
}



export default authReducer;