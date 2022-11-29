let initialState = {
    profileInfo: {
        mainPic: "https://images.wallpaperscraft.ru/image/single/most_kamni_reka_gorod_gorod_na_vode_otrazhenie_58661_2560x1600.jpg",
        avatarPic: "https://cyberofsport.com/wp-content/uploads/2022/02/mgidarccontentnick.comc008fa9d_d.0.jpg",
        name: 'Oleg Korolev',
        age: 21,
        town: 'Moskow'
    },
    postsData: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "This is my first post!" }
    ],
    newPostText: "Write something"
};

const profileReducer = (state = initialState, action) => {
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