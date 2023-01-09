import React from 'react'
import styled from 'styled-components'
import Help from './Help'

const Button = styled.button`
    width: var(--btn-big-w);
    height: var(--btn-big-h);
    background-color: var(--green);
    border-radius: var(--bd-rd-big);
    border: none;
    margin-top: var(--gap-sm);
`

const Container = styled.div`
    width: 100%;
    height: 500px;
    background-color: var(--night);
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
`


const Index = () => {
  //hi
  return (
    <>
    <div className='wrap'>
        <Container>
            <Help/>
            <Button className='eff-fill'>로그인</Button>
            <Button className='eff-fill'>회원가입</Button>
        </Container>
    </div>
    </>
  )
}

export default Index