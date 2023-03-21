import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginThunk } from '../../redux/authReducer';
import LoginForm from './LoginForm';

const Login = (props) => {

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginForm {...props} />
        </div>
    ) 
}

let mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, { loginThunk })(Login);