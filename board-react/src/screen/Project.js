import React from 'react';
import '../css/Project.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Project() {
  return (
    <>
      <div className='div-wrapper'>
        <div className='header'>
          <ArrowBackIcon color='primary' fontSize='large' />
          <h2>프로젝트 진행</h2>
          <div>
            <AccountCircleIcon color='primary' sx={{ fontSize: 50 }} />
            <p>김창영 | 2023.07.11</p>
          </div>
        </div>
        <div className='summary'>
          <div>
            <p>모집 구분</p>
            <p>프로젝트</p>
          </div>
          <div>
            <p>진행 방식</p>
            <p>오프라인</p>
          </div>
          <div>
            <p>모집 인원</p>
            <p>2명</p>
          </div>
          <div>
            <p>시작 예정</p>
            <p>2023.08.11</p>
          </div>
          <div>
            <p>연락 방법</p>
            <p>댓글</p>
          </div>
          <div>
            <p>예상 기간</p>
            <p>장기</p>
          </div>
          <div>
            <p>모집분야</p>
            <p
              style={{
                color: 'white',
                backgroundColor: '#717171',
                padding: '0px 5px',
                borderRadius: '20px',
              }}
            >
              프로젝트
            </p>
          </div>
          <div>
            <p>사용 언어</p>
            <p>파이썬</p>
          </div>
        </div>
        <div className='content'>
          <h2 className='content-title'>프로젝트 소개</h2>
          <h2>팀에 합류하세요 :)</h2>
        </div>

        <div className='comment'>
          <p>
            댓글 <span>0</span>
          </p>
          <div className='comment-box'>
            <form>
              <input placeholder='댓글을 입력하세요.'></input>
            </form>
            <button>댓글 등록</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
