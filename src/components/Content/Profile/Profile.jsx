import s from "./Profile.module.css";
import React from 'react';
import userPic from '../../../assets/images/user.jpg';
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

function Profile(props) {
    
    return (
        <div>
            <img className={s.profile_main_pic} src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613403053_175-p-bezhevii-kosmos-fon-247.jpg" alt="profile-pic" />

            <div className={s.profile_info}>
                <img src={props.profile.photos.small === null ? userPic : props.profile.photos.small} alt="avatar" className={s.avatar} />
                <div className={s.wrapper}>
                    <p>{props.profile.fullName}</p>
                    <ul>
                        <li>
                            {props.profile.aboutMe}
                        </li>
                        <li className={s.profileStatus}>
                            <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk}/>
                        </li>
                        <li>Ищу работу? { props.profile.lookingForAJob ? "Конечно ищу" : "Та не, какая работа" }</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Profile;