import {root} from "./../index";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
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
            ]
        }
    },
    _rerenderEntireTree() {
        console.log("Changed"); //заглушка, настоящая функция передается ниже
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._rerenderEntireTree = observer;
    },

    newPost() {
        let post = {
            id: this._state.profilePage.postsData.length + 1,
            message: this._state.profilePage.newPostText
        };
        this._state.profilePage.postsData.push(post);
        //clear textarea for new post
        this._state.profilePage.newPostText = "";
        //rerender dom
        this._rerenderEntireTree(root, this._state);
    },
    updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this._rerenderEntireTree(root);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this.newPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this.updateNewPostText(action.newText);
        } else {
            alert('Неизвестный Action: ' + action.type);
        }
    }
};

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

export default store;