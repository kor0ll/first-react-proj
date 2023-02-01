import React from 'react';
import s from './Users.module.css';
import userPic from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


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

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '090455b4-869c-46dc-97be-1194b08e9f19'
                                        }
                                    })
                                        .then(response => {
                                            console.log(response);
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},  {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '090455b4-869c-46dc-97be-1194b08e9f19'
                                        }
                                    })
                                        .then(response => {
                                            console.log(response);
                                            if (response.data.resultCode == 0) {
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