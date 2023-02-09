import s from "./MainContent.module.css";
import Profile from "./Profile/Profile";
import React from "react";
import Posts from "./Posts/Posts";
import Preloader from "../common/Preloader/Preloader";
import { Navigate } from "react-router-dom";

function MainContent(props) {
  if (!props.profile) {
    return <Preloader />
  }

  if (!props.isAuth) {
    return <Navigate to='/login'/>
  }

  return (
    <div className={s.main_content}>

      <Profile profile={props.profile} />
      <Posts postsData={props.postsData}
        photo={props.profile.photos.small}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.newPostText} />
    </div>
  )
};

export default MainContent;