import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunk, unfollowThunk, followThunk } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {

    componentDidMount = () => {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsersThunk(page, this.props.pageSize);
    }

    render = () => {
        return <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users 
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage} 
        onPageChanged={this.onPageChanged} 
        users={this.props.users} 
        followingInProgress={this.props.followingInProgress}
        unfollowThunk={this.props.unfollowThunk}
        followThunk={this.props.followThunk}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsFetching: state.usersPage.followingIsFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(selectPageAC(page));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}
*/

export default connect(mapStateToProps, 
    {getUsersThunk, unfollowThunk, followThunk})(UsersAPIComponent);