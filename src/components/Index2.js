import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Help from './Help'

const Button = styled.button`
    width: var(--btn-big-w);
    height: var(--btn-big-h);
    background-color: var(--yellow);
    border-radius: var(--bd-rd-big);
    border: none;
    margin-top: var(--gap-md);
    cursor: pointer;
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
    height: 100%;
    flex-grow: 3;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Index2 = ({ sharedId, userData, userInfo }) => {
  const [idCheck, setIdCheck] = useState(false)
  const [lengthOver, setLengthOver] = useState(false)

  useEffect(() => {
    let receiver = userData.filter(e => e.id === sharedId)
    if ( receiver.length === 1 ){
      setIdCheck(true)
      if(receiver[0].contentLst.length > 12) {
        setLengthOver(true)
      }
      // alert('유효하지 않은 접근입니다')
      // window.location.href = 'http://localhost:3000/'
      console.log(userData)
    }
  }, [])
  const idCheckHandler = () =>{
    alert('유효하지 않은 접근입니다.')
  }
  const LengthCheck=()=>{
    alert('친구의 당근 밭이 가득 찼어요.')
  }

  console.log(userInfo)

  return (
    <div className='wrap'>
      <Container>
        <Main>
          {
            <>
              {
                (userInfo.length !== 0)
                  ? <Link to="/mypage"><Button className='eff-fill'>내 당근밭 가기</Button></Link>
                  :
                  <>
                    <Link to="/login"><Button className='eff-fill'>로그인</Button></Link>
                    <Link to="/join"><Button className='eff-fill'>회원가입</Button></Link>
                  </>
              }
              {
                idCheck
                  ? (userInfo[0].id === sharedId) 
                    ? null 
                    : lengthOver 
                      ? <Link to="/"><Button className='eff-fill' onClick={LengthCheck}>편지쓰기</Button></Link>
                        : <Link to="/write"><Button className='eff-fill'>편지쓰기</Button></Link>
                  : <Link to="/"><Button onClick={idCheckHandler} className='eff-fill'>편지쓰기</Button></Link>
              }
            </>
          }
        </Main>
        <Help />
      </Container>
    </div>
  )
}

export default Index2