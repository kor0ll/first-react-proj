import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { addPost, getProfileThunk, getStatusThunk, updateStatusThunk } from "../../redux/profileReducer";
import MainContent from "./MainContent";

class MainContentContainer extends React.Component {

  userId = null;

  componentDidMount = () => {
    //следующие 5 строчек - лично мой говнокод, потому что метод в уроке устарел и не работает
    this.userId = document.location.pathname.slice(9);
    if (this.userId === "") {
      this.userId = '27749'; // мой айди

    }
    if (!!this.userId) {
      this.props.getProfileThunk(this.userId);
      this.props.getStatusThunk(this.userId);
    }
  }


  render = () => {
    this.userId = document.location.pathname.slice(9);
    if (this.userId === "") {
      if (!this.props.isAuth) {
        return <Navigate to='/login' />
      }
    }
    return <MainContent {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    postsData: state.profilePage.postsData,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, { addPost, getProfileThunk, getStatusThunk, updateStatusThunk }),
)(MainContentContainer);