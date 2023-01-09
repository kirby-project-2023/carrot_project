import React from 'react'
import styled from 'styled-components'
import Help from './Help'
import { Link } from 'react-router-dom';

const Button = styled.button`
    width: var(--btn-big-w);
    height: var(--btn-big-h);
    background-color: var(--yellow);
    border-radius: var(--bd-rd-big);
    border: none;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--night);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Main = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    flex-grow: 3;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Index = () => {
  return (
    <div className='wrap'>
        <Container>
            <Main>
                <Link to="/login"><Button className='eff-fill'>로그인</Button></Link>
                <Link to="join"><Button className='eff-fill'>회원가입</Button></Link>
            </Main>
            <Help/>
        </Container>
    </div>
  )
}

export default Index