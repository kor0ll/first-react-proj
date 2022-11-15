import s from "./MainContent.module.css";
import Post from "./Post/Post";
import Profile from "./Profile/Profile";
import React from "react";



function MainContent(props) {

  let textPost = React.createRef();

  let sendNewPost = () => {
    props.newPost();
  };

  let changeNewPostText = () => {
    let text = textPost.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div className={s.main_content}>
      <img className={s.profile_main_pic} src={props.state.profileInfo.mainPic} alt="profile-pic" />
      <Profile avatar={props.state.profileInfo.avatarPic}
        name={props.state.profileInfo.name}
        age={props.state.profileInfo.age}
        town={props.state.profileInfo.town} />
      <p>My posts</p>

      <div className={s.post_generator}>
        <textarea name="" id="" cols="30" rows="10" placeholder="Напишите что-нибудь..." ref={textPost} 
        onChange={changeNewPostText} 
        value={props.state.newPostText}/>

        <button onClick={sendNewPost}>Создать новый пост</button>
      </div>

      <div className="all-posts">
        {
          props.state.postsData.map((p) => <Post avatar={props.state.profileInfo.avatarPic} message={p.message} />)
        }
      </div>
    </div>
  )
};

export default MainContent;