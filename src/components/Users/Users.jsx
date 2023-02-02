import React from 'react';
import s from './Users.module.css';
import userPic from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import {UsersAPI} from '../../api/api';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.pageDiv}>
            {
                pages.map(p => {
                    return <span className={p === props.currentPage && s.selectedItem} onClick={(e) => props.onPageChanged(p)}>{p} </span>
                }
                )
            }
        </div>
        {
            props.users.map(u =>
                <div key={u.id} className={s.wrapper}>
                    <span className={s.pic_wrapper}>
                        <NavLink to={"/profile/" + u.id} >
                            <img src={u.photos.small === null ? userPic : u.photos.small} alt="pic" className={s.userPhoto} />
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    UsersAPI.unfollow(u.id).then(data => {
                                        if (data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    UsersAPI.follow(u.id).then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                    })
                                }}>Follow</button>}
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


export default Users;