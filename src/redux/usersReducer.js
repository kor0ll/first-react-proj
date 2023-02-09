import { UsersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IS_FETCHING = 'FOLLOWING_IS_FETCHING';

//набор переменные доступных в state
let initialState = {
    users: [],
    pageSize: 5, 
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                        return {...u, followed: true}
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
                        return {...u, followed: false}
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
        case TOGGLE_IS_FETCHING: {
            let newstate = {...state, isFetching: action.isFetching}
            return newstate;
        }
        case FOLLOWING_IS_FETCHING: {

            let newArray = [];
            //если isFetching true, значит пользователь нажал на подписку, добавляем в массив id пользователя, на котором была нажата кнопка
            if (action.isFetching) {
                newArray = [...state.followingInProgress, action.userId]
            }
            //если false, то удаляем из массива этот id через метод filter
            else {
                newArray = [...state.followingInProgress.filter(id => id != action.userId) ]
            }

            let newstate = {...state, followingInProgress: newArray}
            return newstate;
        }


        default: {
            //тут ничего копировать не нужно, потому что и перерисовка нам не нужна
            return state;
        }
    }
}


export const followSuccess = (id) => {
    let action = {
        type: FOLLOW,
        userID: id
    }
    return action;
}
export const unfollowSuccess = (id) => {
    let action = {
        type: UNFOLLOW,
        userID: id
    }
    return action;
}
export const setUsers = (users) => {
    let action = {
        type: SET_USERS, 
        users: users
    }
    return action;
}
export const selectPage = (page) => {
    let action = {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
    return action;
}
export const setTotalUsersCount = (totalCount) => {
    let action = {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
    return action;
}
export const toggleIsFetching = (isFetching) => {
    let action = {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
    return action;
}
export const followingIsFetching = (isFetching, userId) => {
    let action = {
        type: FOLLOWING_IS_FETCHING,
        isFetching: isFetching,
        userId: userId
    }
    return action;
}

//в санках используют замыкания, чтобы передать функции параметры извне. Засунуть их в саму функцию невозможно, потому что
//мы передаем фукнцию как коллбэк, не вызывая ее
export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(selectPage(currentPage));
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            //строка ниже позволяет рассчитывать количество страниц исходя из того, сколько пользователей пришло с сервера
            //так как их там слишком много, строка будет закомментирована, хардкодом подставлено значение 10, если что меняй в usersReducer
            //setTotalUsersCount(response.data.totalCount);
        })
    }
}

export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(followingIsFetching(true, id));
        UsersAPI.unfollow(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(id));
            }
            dispatch(followingIsFetching(false, id));
        })
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(followingIsFetching(true, id));
        UsersAPI.follow(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(id));
            }
            dispatch(followingIsFetching(false, id));
        })
    }
}

export default usersReducer;