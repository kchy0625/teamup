// eslint-disable-next-line
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Main.css';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Main() {
  const [projectList, setProjectList] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch('https://bmmmg.github.io/test/testdb.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setProjectList(res);
      });
  }, []);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div
            style={{ background: '#edfaf7' }}
            className='third_bannerWrapper'
          >
            <div className='third_banner'>
              <div className='left' alt='#' style={{ flexDirection: 'column' }}>
                <p>NOTICE</p>
                <h2>안녕하세요. 1번째 공지사항입니다</h2>
              </div>
              <div className='left'>
                <img src='/11.png' alt='#' style={{ width: '70%' }} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ background: '#fff088' }}
            className='third_bannerWrapper'
          >
            <div className='third_banner'>
              <div className='left' alt='#' style={{ flexDirection: 'column' }}>
                <p>NOTICE</p>
                <h2>안녕하세요. 2번째 공지사항입니다</h2>
              </div>
              <div className='left'>
                <img src='/22.png' alt='#' style={{ width: '70%' }} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='third_bannerWrapper'>
            <div className='third_banner'>
              <div className='left' style={{ flexDirection: 'column' }}>
                <p>NOTICE</p>
                <h2>안녕하세요. 3번째 공지사항입니다</h2>
              </div>
              <div className='left'>
                <img src='/33.png' alt='#' style={{ width: '50%' }} />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className='project'>
        {projectList.map((a, i) => {
          return (
            <div
              className='projectContainer'
              onClick={() => {
                console.log(a.id);
              }}
            >
              <div className='projectHead'>
                <img src={process.env.PUBLIC_URL + '/cube.png'} />
                <p>{projectList[i].category}</p>
              </div>
              <div className='projectHead'>
                <p
                  style={{
                    color: 'gray',
                    marginTop: '10px',
                    marginBottom: '20px',
                  }}
                >
                  마감 | {projectList[i].deadline}
                </p>
              </div>
              <div className='projectMain'>
                <h3>{projectList[i].title}</h3>
                <p>{projectList[i].position}</p>
                <img src={process.env.PUBLIC_URL + '/python.png'} />
              </div>
              <div className='projectFooter'>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: '1',
                  }}
                >
                  <img src={process.env.PUBLIC_URL + '/account.png'} />
                  <p>{projectList[i].leader}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: '1',
                    justifyContent: 'flex-end',
                  }}
                >
                  <img src={process.env.PUBLIC_URL + '/speech-bubble.png'} />
                  <p>0</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
