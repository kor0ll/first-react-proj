import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import MainContentContainer from './components/Content/MainContentContainer';
import MessagesContainer from './components/Messages/MessagesContainer';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper-app">
          <Header />
          <Nav />
          <div className='content-wrapper'>
            <Routes>
              <Route path="/profile*" element={<MainContentContainer />} />
              <Route path="/messages*" element={<MessagesContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
