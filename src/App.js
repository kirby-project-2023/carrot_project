import './styles/variable.css';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment, useState } from 'react';
import Guide from './components/Guide'
import Index from './components/Index'
import Join from './components/Join'
import userJson from './datas/userData.json'
import dummyJson from './datas/dummyData.json'



function App() {
  const [ userData, setUserData ] = useState(userJson)
  const [ dummyData, setDummyData ] = useState(dummyJson)
  return (
    <Fragment>
      <GlobalStyle /> 
      <Index /> 
      <Join userData={userData} setUserData={setUserData}/>
    </Fragment>
  );
}

export default App;
