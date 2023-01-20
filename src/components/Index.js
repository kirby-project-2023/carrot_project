import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Title  = styled.h1`
    font-size: var(--fz-large);
    color: var(--white);
    margin-bottom: var(--gap-large);
`

const Button = styled.button`
    width: var(--btn-big-w);
    height: var(--btn-big-h);
    background-color: var(--yellow);
    border-radius: var(--bd-rd-big);
    border: none;
    margin-top: var(--gap-md);
    cursor: pointer;
    color: var(--black);
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Main = styled.main`
    display: flex;
    width: 100%;
    flex-grow: 3;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Index = ({userInfo}) => {
    return (
    <div className='wrap'>
    <Container>
        <Main>
            <Title>2023 커비의 당근 심기</Title>
            {
                userInfo.length!==0
                ?
                <Link to="/mypage"><Button className='eff-fill'>내 당근밭 가기</Button></Link>
                :
                <>
                    <Link to="/login"><Button className='eff-fill'>로그인</Button></Link>
                    <Link to="/join"><Button className='eff-fill'>회원가입</Button></Link>
                </>
            }
        </Main>
    </Container>
    </div>
  )
}

export default Index