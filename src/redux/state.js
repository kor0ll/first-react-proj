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
        ]
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

export default state;