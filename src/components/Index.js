import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: var(--btn-big-w);
    height: var(--btn-big-h);
    background-color: var(--green);
    border-radius: var(--bd-rd-big);
    border: none;
`

const Container = styled.div`
    width: 500px;
    height: 500px;
    background-color: var(--night);
    display: flex;
    align-items: center;
    justify-items: center;
`

function Index() {
  return (
    <>
    <div>
        <Container>
            <Button className='eff-fill'>로그인</Button>
            <Button className='eff-fill'>회원가입</Button>
        </Container>
    </div>
    </>
  )
}

export default Index