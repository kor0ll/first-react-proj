import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPic from '../../assets/images/user.jpg';

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
    }
    return <div>
        {
            props.users.map(u => 
                <div key={u.id} className={s.wrapper}>
                    <span className={s.pic_wrapper}>
                        <img src={u.photos.small === null ? userPic : u.photos.small} alt="pic" className={s.userPhoto}/>
                        <div>
                            { u.isfollowed 
                            ? <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button> 
                            : <button onClick={() => {props.follow(u.id)} }>Follow</button> }
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