import React from 'react';
import { connect } from 'react-redux';
import { follow, setTotalUsersCount,selectPage, setUsers, toggleIsFetching, unfollow, followingIsFetching } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {UsersAPI} from '../../api/api';

class UsersAPIComponent extends React.Component {

    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            //строка ниже позволяет рассчитывать количество страниц исходя из того, сколько пользователей пришло с сервера
            //так как их там слишком много, строка будет закомментирована, хардкодом подставлено значение 10, если что меняй в usersReducer
            //this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (page) => {
        this.props.selectPage(page);
        this.props.toggleIsFetching(true);

        UsersAPI.getUsers(page, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        })
    }

    render = () => {
        return <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users 
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage} 
        onPageChanged={this.onPageChanged} 
        follow={this.props.follow} 
        unfollow={this.props.unfollow}
        users={this.props.users} 
        changeActiveProfileId={this.props.changeActiveProfileId}
        followingIsFetching={this.props.followingIsFetching}
        followingInProgress={this.props.followingInProgress}/>
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
    {follow, unfollow, setUsers, selectPage, setTotalUsersCount, toggleIsFetching, followingIsFetching})(UsersAPIComponent);