import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let withAuthRedirect = (Component) => {
    class newComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to='/login' />
            }
            return <Component { ...this.props } ></Component>
        }
    }

    return connect(mapStateToProps)(newComponent);
}

export default withAuthRedirect;