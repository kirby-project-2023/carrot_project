import './styles/variable.css';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment } from 'react';
import Guide from './components/Guide'

function App() {
  return (
    <Fragment>
      <GlobalStyle /> 
      <Guide/>
    </Fragment>
  );
}

export default App;
