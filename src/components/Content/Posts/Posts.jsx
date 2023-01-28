import React from "react";
import Post from "../Post/Post";
import s from './../MainContent.module.css';
import userPic from '../../../assets/images/user.jpg';

let Posts = (props) => {

    let textPost = React.createRef();

    let sendNewPost = () => {
        props.addPost();
    };
    let changeNewPostText = () => {
        let text = textPost.current.value;
        props.updateNewPostText(text);
    }

    return <div>
        <p>My posts</p>
        <div className={s.post_generator}>
            <textarea name="" id="" cols="30" rows="10" placeholder="Напишите что-нибудь..." ref={textPost}
                onChange={changeNewPostText}
                value={props.newPostText} />

            <button onClick={sendNewPost}>Создать новый пост</button>
        </div>

        <div className="all-posts">
            {
                props.postsData.map((p) => <Post key={p.id} avatar={props.photo === null ? userPic : props.photo} message={p.message} />)
            }
        </div>
    </div>
}

export default Posts;