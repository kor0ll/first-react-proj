import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    return <div>
        {
            props.users.map(u => 
                <div key={u.id}>
                    <span>
                        <img src={u.photoUrl} alt="pic" className={s.userPhoto}/>
                        <div>
                            { u.isfollowed 
                            ? <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button> 
                            : <button onClick={() => {props.follow(u.id)} }>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <div>
                            <span>{u.fullname}</span>
                            <span>{u.status}</span>
                        </div>
                        <div>{u.location.city}, {u.location.country}</div>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;