import React from 'react';
import s from './Users.module.css';
import userPic from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';


let Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.pageDiv}>
            {
                 pages.map(p =>
                    {
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
                            {u.isfollowed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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