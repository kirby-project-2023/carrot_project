import './styles/variable.css';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment, useState } from 'react';
import Guide from './components/Guide'
import Index from './components/Index'
import Join from './components/Join'
import userJson from './datas/userData.json'
import dummyJson from './datas/dummyData.json'
import Login from './components/Login';



function App() {
  const [ userData, setUserData ] = useState(userJson)
  const [ dummyData, setDummyData ] = useState(dummyJson)
  
  {/*Login.js, Mypage.js에서 사용할 state -> mypage에 아이디 띄워야 해서 가져옴 */}
  const [nickname, setNickname] = useState('');
  
  return (
    <Fragment>
      <GlobalStyle /> 
      <Index /> 
      <Join userData={userData} setUserData={setUserData}/>
      <Login setNickname={setNickname}/>
    </Fragment>
  );
}

export default App;
