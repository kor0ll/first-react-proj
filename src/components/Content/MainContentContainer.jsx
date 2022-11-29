import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../redux/profileReducer";
import MainContent from "./MainContent";





function MainContentContainer(props) {

  let state = props.store.getState();

  let sendNewPost = () => {
    props.store.dispatch(addPostAC());
  };

  let changeNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextAC(text));
  }
  return (
    <MainContent updateNewPostText={changeNewPostText} addPost={sendNewPost} newPostText={state.profilePage.newPostText}
    profileInfo={state.profilePage.profileInfo} postsData={state.profilePage.postsData}/>
  )
};

export default MainContentContainer;