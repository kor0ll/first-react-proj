import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import MainContent from './Content/MainContent';
import Messages from './components/Messages/Messages';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="wrapper-app">
        <Header />
        <Nav />
        <div className='content-wrapper'>
          <Routes>
            <Route path="/profile*" element={<MainContent />} />
            <Route path="/messages*" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
