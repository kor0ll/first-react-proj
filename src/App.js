import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import MainContent from './components/Content/MainContent';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './redux/state';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper-app">
          <Header />
          <Nav />
          <div className='content-wrapper'>
            <Routes>
              <Route path="/profile*" element={<MainContent
                state={props.state.profilePage}
                newPost={props.newPost}
                updateNewPostText={props.updateNewPostText} />} />
              <Route path="/messages*" element={<Messages state={props.state.messagesPage} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
