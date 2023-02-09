import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '090455b4-869c-46dc-97be-1194b08e9f19'
    }
})

export const UsersAPI = {
    getUsers: (currentPage = 1, pageSize = 5) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    unfollow: (id) => {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

    follow: (id) => {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data;
            })
    }
}

export const ProfileAPI = {
    getProfile: (id) => {
        return instance.get(`profile/` + id)
        .then(response => {
            return response.data;
        })
    }
}

export const AuthAPI = {
    authMe: () => {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        })
    }
}