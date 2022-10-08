import s from "./Post.module.css";

function Post(props) {
    return (
        <div className={s.wrapper}>
            <div className={s.cont}>
                <img src={props.avatar} alt="" className={s.avatar} />
                {props.message}
            </div>
            <div className={s.emotions}>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;