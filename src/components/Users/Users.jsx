import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPic from '../../assets/images/user.jpg';

class Users extends React.Component {

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            //строка ниже позволяет рассчитывать количество страниц исходя из того, сколько пользователей пришло с сервера
            //так как их там слишком много, строка будет закомментирована, хардкодом подставлено значение 10, если что меняй в usersReducer
            //this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render = () => {

        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={s.pageDiv}>
                {
                    pages.map(p =>
                        <span className={p===this.props.currentPage && s.selectedItem}
                        onClick={(e) => this.onPageChanged(p)}>{p} </span>
                    )
                }
            </div>
            {
                this.props.users.map(u =>
                    <div key={u.id} className={s.wrapper}>
                        <span className={s.pic_wrapper}>
                            <img src={u.photos.small === null ? userPic : u.photos.small} alt="pic" className={s.userPhoto} />
                            <div>
                                {u.isfollowed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span className={s.textwrapper}>
                            <div>
                                <div >{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>'u.location.city', "u.location.country"</div>
                        </span>
                    </div>
                )
            }
        </div>
    }
}

export default Users;