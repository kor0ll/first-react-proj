import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { authMeThunk, logoutThunk } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authMeThunk();
  }

  render() {
    return <Header { ...this.props } />
  }

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { authMeThunk,  logoutThunk })(HeaderContainer);