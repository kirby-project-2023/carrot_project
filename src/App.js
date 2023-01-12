import './styles/variable.css';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment, useEffect, useState } from 'react';
import Index from './components/Index'
import Join from './components/Join'
import userJson from './datas/userData.json'
import dummyJson from './datas/dummyData.json'
import Login from './components/Login';
import Mypage from './components/Mypage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Write from './components/Write';
import Index2 from './components/Index2';

function App() {
  // 여기 수정이 되어야 한다
  const [userData, setUserData] = useState(userJson)
  const [dummyData, setDummyData] = useState(dummyJson)
  const [userInfo, setUserInfo] = useState([])
  const [sharedId, setSharedId] = useState('')


  useEffect(() => {
    const url = String(window.location.href)
    if (url.includes('id')) {
      setSharedId(url.slice(url.indexOf('=')+1))
    }
  }, [])

  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path={`/`} element={<Index />} />
          <Route path={`/id=${sharedId}`} element={<Index2 sharedId={sharedId} />} />
          <Route path="/join" element={<Join userData={userData} setUserData={setUserData} />} />
          <Route path="/login" element={<Login userData={userData} setUserInfo={setUserInfo} />} />
          <Route path="/mypage" element={<Mypage userInfo={userInfo} dummyData={dummyData} />} />
          <Route path="/write" element={<Write userInfo={userInfo} dummyData={dummyData} sharedId={sharedId} />} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
