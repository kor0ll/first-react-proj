import React from "react";
import { connect } from "react-redux";
import {addPost, updateNewPostText, getProfile} from "../../redux/profileReducer";
import MainContent from "./MainContent";
import axios from "axios";

class MainContentContainer extends React.Component {

  componentDidMount = () => {
    //следующие 5 строчек - лично мой говнокод, потому что метод в уроке устарел и не работает
    let userId = null;
    userId = document.location.pathname.slice(9);
    if (userId === "") {
      userId = '2';
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.getProfile(response.data);
        })
  }

  render = () => {
    return <MainContent { ...this.props } />
  }
}

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    postsData: state.profilePage.postsData
  }
}



export default connect(mapStateToProps, {addPost, updateNewPostText, getProfile} )(MainContentContainer);