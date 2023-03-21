import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import MainContentContainer from './components/Content/MainContentContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initAppThunk } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux';



class App extends React.Component {

  componentDidMount() {
    this.props.initAppThunk();
  }


  render() {

    if (!this.props.init) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="App">
          <div className="wrapper-app">
            <HeaderContainer />
            <Nav />
            <div className='content-wrapper'>
              <Routes>
                <Route path="/profile*" element={<MainContentContainer />} />
                <Route path="/messages*" element={<MessagesContainer />} />
                <Route path='/users*' element={<UsersContainer />} />
                <Route path='/login*' element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter >
    );
  }

}

let mapStateToProps = (state) => ({
  init: state.app.initialized
})

export default connect(mapStateToProps, {initAppThunk})(App);
