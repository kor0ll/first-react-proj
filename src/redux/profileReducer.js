const profileReducer = (state, action) => {
    switch(action.type) {
        case 'ADD-POST': {
            let post = {
                id: state.postsData.length + 1,
                message: state.newPostText
            };
            state.postsData.push(post);
            state.newPostText = "";
            return state;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.newText;
            return state;
        }
        default: {
            return state;
        }
    }
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostAC = () => {
    let action = {
        type: ADD_POST
    }
    return action;
}
export const updateNewPostTextAC = (text) => {
    let action = {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
    return action;
}

export default profileReducer;