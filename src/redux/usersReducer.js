const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/1641332/pub_5dfb7abb3f548749e34c3146_5dfcc8f81febd400b02402fb/scale_1200', fullname: 'Oleg', status: 'I am a legend', isfollowed: false, location: {city: 'Moskow', country: 'Russia'}},
        {id: 2, photoUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/1641332/pub_5dfb7abb3f548749e34c3146_5dfcc8f81febd400b02402fb/scale_1200', fullname: 'Dmitry', status: 'I am a legend too', isfollowed: true, location: {city: 'Tula', country: 'Russia'}},
        {id: 3, photoUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/1641332/pub_5dfb7abb3f548749e34c3146_5dfcc8f81febd400b02402fb/scale_1200', fullname: 'Artem', status: 'I am a legend too', isfollowed: false, location: {city: 'Boston', country: 'USA'}}
    ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            let newstate = {
                //копируем поверхностно state
                ...state,
                //далее прописываем копирование users, выполняем через map, так как нам нужно изменить что то в одном из юзеров
                //ненужный нам user копироваться не будет, но на нужном будет меняться isfollowed и происходить копия
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return {...u, isfollowed: true}
                    }
                    return u;
                })
            }
            return newstate;
        }
        case UNFOLLOW: {
            let newstate = {
                //копируем поверхностно state
                ...state,
                //далее прописываем копирование users, выполняем через map, так как нам нужно изменить что то в одном из юзеров
                //ненужный нам user копироваться не будет, но на нужном будет меняться isfollowed и происходить копия
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return {...u, isfollowed: false}
                    }
                    return u;
                })
            }
            return newstate;
        }
        case SET_USERS: {
            //на будущее
            let newstate = {...state, users: [...state.users, ...action.users]};
            return newstate;
        }
        default: {
            //тут ничего копировать не нужно, потому что и перерисовка нам не нужна
            return state;
        }
    }
}


export const followAC = (id) => {
    let action = {
        type: FOLLOW,
        userID: id
    }
    return action;
}
export const unfollowAC = (id) => {
    let action = {
        type: UNFOLLOW,
        userID: id
    }
    return action;
}
export const setUsersAC = (users) => {
    let action = {
        type: SET_USERS, 
        users: users
    }
    return action;
}

export default usersReducer;