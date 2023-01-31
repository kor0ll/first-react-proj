import React from 'react';
import Header from "./Header";
import axios from "axios";
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            let id = response.data.data.id;
            let email = response.data.data.email;
            let login = response.data.data.login;
            this.props.setAuthUserData(id, email, login);
        })
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




export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);