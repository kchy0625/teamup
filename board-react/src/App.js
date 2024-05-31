// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screen/Login';
import Main from './screen/Main';
import Write from './screen/Write';
import Project from './screen/Project';
import * as React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand className='navbar' href='/'>
            팀플할래?
          </Navbar.Brand>
          <div className='navbar_login'>
            <button style={{ marginRight: '30px' }}>로그인</button>
            <button>회원가입</button>
          </div>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
