import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const GET_PROFILE = 'GET-PROFILE';

const SET_STATUS = 'GET-STATUS';
const UPDATE_STATUS_TEXT = 'UPDATE-STATUS-TEXT';

let initialState = {
    profile: null,
    postsData: [
        { id: 1, message: "This is my first post!?" },
        { id: 2, message: "This is my second post!" }
    ],
    status: '',
    myUserId: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let post = {
                id: state.postsData.length + 1,
                message: action.newText
            };
            //выполняем поверхностную и глубокую копию state, чтобы вернуть не ссылку на тот же объект state (не перерисует тогда),
            //а на новый объект
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];

            stateCopy.postsData.push(post);
            return stateCopy;
        }
        case GET_PROFILE: {
            let stateCopy = {...state, profile: action.profile};
            return stateCopy;
        }
        case SET_STATUS: {
            let stateCopy = {...state, status: action.status};
            return stateCopy;
        }
        case UPDATE_STATUS_TEXT: {
            let stateCopy = {...state, status: action.status};
            return stateCopy;
        }
        default: {
            //тут ничего копировать не нужно, потому что и перерисовка нам не нужна
            return state;
        }
    }
}

export const addPost = (newText) => {
    let action = {
        type: ADD_POST,
        newText: newText
    }
    return action;
}
export const getProfile = (profile) => {
    let action = {
        type: GET_PROFILE,
        profile: profile
    }
    return action;
}
export const setStatus = (status) => {
    let action = {
        type: SET_STATUS,
        status: status
    }
    return action;
}


export const getProfileThunk = (userId) => (dispatch) => {
    ProfileAPI.getProfile(userId)
        .then(data => {
            dispatch(getProfile(data));
        })
}
export const getStatusThunk = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        })
}
export const updateStatusThunk = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
            else {
                alert(data.messages[0]);
            }
        })
}

export default profileReducer;