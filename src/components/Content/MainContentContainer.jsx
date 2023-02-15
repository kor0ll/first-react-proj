import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";
import {addPost, updateNewPostText, getProfileThunk} from "../../redux/profileReducer";
import MainContent from "./MainContent";

class MainContentContainer extends React.Component {

  componentDidMount = () => {
    //следующие 5 строчек - лично мой говнокод, потому что метод в уроке устарел и не работает
    let userId = null;
    userId = document.location.pathname.slice(9);
    if (userId === "") {
      userId = '2';
    }

    this.props.getProfileThunk(userId);
  }

  render = () => {
    return <MainContent { ...this.props } />
  }
}

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    postsData: state.profilePage.postsData,
  }
}

export default compose(
  connect(mapStateToProps, {addPost, updateNewPostText, getProfileThunk}),
  //withAuthRedirect
)(MainContentContainer);