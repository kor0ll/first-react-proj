import s from "./Profile.module.css";

function Profile(props) {
    return (
        <div className={s.profile_info}>
            <img src={props.avatar} alt="avatar" className={s.avatar} />
            <div className={s.wrapper}>
                <p>{props.name}</p>
                <ul>
                    <li>Возраст: {props.age}</li>
                    <li>Город: {props.town}</li>
                </ul>
            </div>
        </div>
    )
};

export default Profile;