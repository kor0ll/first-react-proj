import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import MainContentContainer from './components/Content/MainContentContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



function App(props) {
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
    </BrowserRouter>
  );
}

export default App;
