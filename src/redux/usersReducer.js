const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5, 
    totalUsersCount: 50,
    currentPage: 1
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
            let newstate = {...state, users: action.users};
            return newstate;
        }
        case SET_CURRENT_PAGE: {
            let newstate = {...state, currentPage: action.currentPage}
            return newstate;
        }
        case SET_TOTAL_USERS_COUNT: {
            let newstate = {...state, totalUsersCount: action.totalCount}
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
export const selectPageAC = (page) => {
    let action = {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
    return action;
}
export const setTotalUsersCountAC = (totalCount) => {
    let action = {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
    return action;
}

export default usersReducer;