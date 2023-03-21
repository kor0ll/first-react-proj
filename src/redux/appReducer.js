import { authMeThunk } from "./authReducer";

const INIT_DATA = 'INIT_DATA';

let initialState = {
    initialized : false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_DATA: {
            let stateCopy = { ...state, initialized: true};
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const initAppThunk = () => {
    return (dispatch) => {
        let promise = dispatch(authMeThunk());

        Promise.all([promise]).then( () => {
            dispatch(initSuccess());
        })
    }
}

export const initSuccess = () => ({type: INIT_DATA});

export default appReducer;