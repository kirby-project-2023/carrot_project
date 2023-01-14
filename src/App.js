import React, { useState , useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <div className='app-wrap'>
        <GlobalStyle />
        <Header userInfo={userInfo}/>
        <Routes>
          <Route path={`/`} element={<Index />} />
          <Route path={`/id=${sharedId}`} element={<Index2 sharedId={sharedId} />} />
          <Route path="/join" element={<Join userData={userData} setUserData={setUserData} />} />
          <Route path="/login" element={<Login userData={userData} setUserInfo={setUserInfo} />} />
          <Route path="/mypage" element={<Mypage userInfo={userInfo} dummyData={dummyData} />} />
          <Route path="/write" element={<Write userInfo={userInfo} dummyData={dummyData} sharedId={sharedId} />} />
        </Routes>
        <Footer />
        <Help/>
      </div>
    </BrowserRouter>
  );
}

export default App;
