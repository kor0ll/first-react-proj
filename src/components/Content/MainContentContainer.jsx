import React from "react";
import { connect } from "react-redux";
import {addPost, updateNewPostText, getProfile} from "../../redux/profileReducer";
import MainContent from "./MainContent";
import axios from "axios";

class MainContentContainer extends React.Component {

  componentDidMount = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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