import React from 'react';
import '../css/Login.css';
import { useState } from 'react';

import axios from 'axios';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://bmmmg.github.io/test/logintest.json',
        { userId, password }
      );
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('오 됨'); // 로그인 성공 후 이동할 페이지
    } catch (error) {
      console.error('로그인 실패맞음', error);
    }
  };
  return (
    <div className='container_me'>
      <div className='login_form'>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <input
            className='input'
            placeholder='아이디'
            type='text'
            id='username'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          ></input>
          <input
            className='input'
            placeholder='비밀번호'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type='submit'>로그인</button>
        </form>
        <div>
          <input type='checkbox'></input>
          <label style={{ marginLeft: '10px', fontWeight: '600' }}>
            로그인 상태 유지
          </label>
        </div>
        <div className='etc_button'>
          <button>회원가입</button>
          <button style={{ float: 'right' }}>비밀번호 찾기</button>
          <button style={{ float: 'right', marginRight: '30px' }}>
            계정 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
