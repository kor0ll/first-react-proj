import s from "./MainContent.module.css";
import Profile from "./Profile/Profile";
import React from "react";
import Posts from "./Posts/Posts";
import Preloader from "../common/Preloader/Preloader";

function MainContent(props) {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.main_content}>

      <Profile profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
      <Posts postsData={props.postsData}
        photo={props.profile.photos.small}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.newPostText} />
    </div>
  )
};

export default MainContent;