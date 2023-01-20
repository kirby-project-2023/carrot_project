import React, { useState , useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/variable.css';
import GlobalStyle from './styles/GlobalStyle';
import userJson from './datas/userData.json'
import dummyJson from './datas/dummyData.json'
import Header from './components/Header';
import Index from './components/Index'
import Index2 from './components/Index2';
import Join from './components/Join'
import Login from './components/Login';
import Mypage from './components/Mypage';
import Write from './components/Write';
import Footer from './components/Footer';
import Help from './components/Help'

function App() {
  // 여기 수정이 되어야 한다
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || userJson)
  const [dummyData, setDummyData] = useState(JSON.parse(localStorage.getItem('dummyData')) || dummyJson)
  const [sharedId, setSharedId] = useState('')
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')) || [])
  useEffect(() => {
    const url = String(window.location.href)
    if (url.includes('id')) {
      let localSharedId = decodeURI(url.slice(url.indexOf('=')+1))
      localStorage.setItem("sharedId",JSON.stringify(localSharedId))
      setSharedId(JSON.parse(localStorage.getItem("sharedId")))
    }
    // 한글 아이디 받아올 수 있도록 디코딩
    if(!localStorage.getItem("dummyData")){
      localStorage.setItem("dummyData",JSON.stringify(dummyData))
    }
    if(!localStorage.getItem("userData")){
      localStorage.setItem("userData",JSON.stringify(userData))
    }
  }, [])

  return (
    <HashRouter basename='/'>
      <div className='app-wrap'>
        <GlobalStyle />
        <Header userInfo={userInfo}/>
        <Routes>
          <Route path={`/`} element={<Index userInfo={userInfo} />} />
          <Route path={`/id=${sharedId}`} element={<Index2 sharedId={sharedId} userData={userData} userInfo={userInfo} />} />
          <Route path="/join" element={<Join userData={userData} setUserData={setUserData} />} />
          <Route path="/login" element={<Login userData={userData} setUserInfo={setUserInfo} />} />
          <Route path="/mypage" element={<Mypage userInfo={userInfo} dummyData={dummyData} />} />
          <Route path="/write" element={<Write  userData={userData} setUserData={setUserData} userInfo={userInfo} dummyData={dummyData} setDummyData={setDummyData} sharedId={sharedId} />} />
        </Routes>
        <Footer />
        <Help/>
      </div>
    </HashRouter>
  );
}

export default App;
