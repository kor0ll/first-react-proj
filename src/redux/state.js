import {root} from "./../index";

let rerenderEntireTree = (root, state) => {
    console.log("Changed"); //заглушка, настоящая функция передается ниже
}

let state = {
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
};

export const callbackFunc = (observer) => {
    rerenderEntireTree = observer;
} 

export const newPost = () => {
    let post = {
        id: state.profilePage.postsData.length + 1,
        message: state.profilePage.newPostText
    };
    state.profilePage.postsData.push(post);
    //clear textarea for new post
    state.profilePage.newPostText = "";
    console.log(state.profilePage.newPostText);
    //rerender dom
    rerenderEntireTree(root, state);
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(root, state);
}

export default state;