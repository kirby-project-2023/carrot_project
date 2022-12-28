import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: var(--btn-big-w);
    height: var(--btn-big-h);
    background-color: var(--green);
    border-radius: var(--bd-rd-big);
    border: none;
`

function index() {
  return (
    <>
    <div>index</div>
    <Button className='eff-fill'>로그인</Button>
    <Button className='eff-fill'>회원가입</Button>
    </>
  )
}

export default index