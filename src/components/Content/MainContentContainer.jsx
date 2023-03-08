import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";
import {addPost, getProfileThunk, getStatusThunk, updateStatusThunk} from "../../redux/profileReducer";
import MainContent from "./MainContent";

class MainContentContainer extends React.Component {

  componentDidMount = () => {
    //следующие 5 строчек - лично мой говнокод, потому что метод в уроке устарел и не работает
    let userId = null;
    userId = document.location.pathname.slice(9);
    if (userId === "") {
      userId = '27749'; // мой айди
    }

    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  render = () => {
    return <MainContent { ...this.props } />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    postsData: state.profilePage.postsData,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, {addPost, getProfileThunk, getStatusThunk, updateStatusThunk}),
  //withAuthRedirect
)(MainContentContainer);