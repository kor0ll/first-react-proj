import s from "./MainContent.module.css";
import Post from "./Post/Post";
import Profile from "./Profile/Profile";
import React from "react";

function MainContent(props) {

  let textPost = React.createRef();

  let sendNewPost = () => {
    props.addPost();
  };

  let changeNewPostText = () => {
    let text = textPost.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div className={s.main_content}>
      <img className={s.profile_main_pic} src={props.profileInfo.mainPic} alt="profile-pic" />
      <Profile avatar={props.profileInfo.avatarPic}
        name={props.profileInfo.name}
        age={props.profileInfo.age}
        town={props.profileInfo.town}/>
      <p>My posts</p>

      <div className={s.post_generator}>
        <textarea name="" id="" cols="30" rows="10" placeholder="Напишите что-нибудь..." ref={textPost} 
        onChange={changeNewPostText} 
        value={props.newPostText}/>

        <button onClick={sendNewPost}>Создать новый пост</button>
      </div>

      <div className="all-posts">
        {
          props.postsData.map((p) => <Post key={p.id} avatar={props.profileInfo.avatarPic} message={p.message} />)
        }
      </div>
    </div>
  )
};

export default MainContent;