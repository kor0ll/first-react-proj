import React from "react";
import { connect } from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../redux/profileReducer";
import MainContent from "./MainContent";





// function MainContentContainer(props) {

//   let state = props.store.getState();

//   let sendNewPost = () => {
//     props.store.dispatch(addPostAC());
//   };

//   let changeNewPostText = (text) => {
//     props.store.dispatch(updateNewPostTextAC(text));
//   }
//   return (
//     <MainContent updateNewPostText={changeNewPostText} addPost={sendNewPost} newPostText={state.profilePage.newPostText}
//     profileInfo={state.profilePage.profileInfo} postsData={state.profilePage.postsData}/>
//   )
// };

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    profileInfo: state.profilePage.profileInfo,
    postsData: state.profilePage.postsData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      return dispatch(updateNewPostTextAC(text))
    },
    addPost: () => {
      return dispatch(addPostAC())
    }
  }
}
const MainContentContainer = connect(mapStateToProps, mapDispatchToProps)(MainContent);

export default MainContentContainer;