import './styles/variable.css';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment } from 'react';
import Guide from './components/Guide'
import Index from './components/Index';

import Index from './components/Index'
import Join from './components/Join'

function App() {
  return (
    <Fragment>
      <GlobalStyle /> 
      <Index /> 
      <Join/>
    </Fragment>
  );
}

export default App;
