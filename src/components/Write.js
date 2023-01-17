import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FormCenter,BaseInput,BaseButton } from '../styles/style';
import {useNavigate} from 'react-router-dom'

const WriteForm = styled.div`
  width: 100%;
`;
const Owner = styled.h2`
  color: var(--white);
  font-size: var(--fz-big);
`;
const WriteTextArea = styled.textarea`
  width: 100%;
  height: var(--text-h);
  background: var(--white);
  resize: none;
  margin-top: var(--gap-big);
  padding: var(--gap-md);
  border-radius: var(--bd-rd-big);
  @media (max-width: 768px){
    height : 30vh;
  }
`;
const NicknameBox = styled.div`
  display: flex; justify-content: flex-end; align-items: center;
  margin-top: var(--gap-big);
`;
const NicknameLabel = styled.label`
  color: var(--white);
  font-size: var(--fz-big);
  padding-right: var(--gap-md);
`;

//ReWrite Modal
const ModalBackDrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 50%;
  top: 50%;
  // 왼쪽
  transform: translate(-50%, -50%);
  //
  background-color: rgba(0, 0, 0, 0.371);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .message {
    background: var(--green);
    border-radius: 15px;
    padding: 10px;
    height: max-content;
    color: white;
    display:flex;
    flex-direction: column;
   align-items: center;
   justify-content: space-around;
   & div.message {
    margin: 10px;
    padding: 0px;
    font-size: 20px;
   }
  }
  & div.complete {
    width: 400px;
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: var(--green);
    font-size: larger;
    & span {
      font-size: smaller;
      color: white;
      margin: 10px;
    }
  }
`;
const WriterNickname = styled.div`
  text-align: center;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const ModalBtn = styled.button`
  position: relative;
  width: var(--ip-big-w);
  height: var(--ip-big-h);
  text-align: center;
  background: var(--maincolor);
  border-radius: var(--bd-rd-sm);
  color: var(--white);
  cursor: pointer;
  transition: var(--trans);
  &:hover {
      box-shadow: var(--shadow);
      transition: var(--trans);
  };
`;
const Message = styled.div`
  width: 400px;
  height: 200px;
  background: rgba( 255, 255, 255, 0.2 );
  padding: 10px;
  overflow: scroll;
  margin: 20px 0;
  text-align: center;
`;


const Write = ({ userData, setUserData, dummyData, sharedId, setDummyData }) => {
  
  const [content, setContent] = useState('');
  const [nickname, setNickname] = useState('');
  const sharedUserField = userData.filter((el) => el.id === sharedId)[0].field
  // 당근 밭 주인의 닉네임
  const navigate = useNavigate()
  const [isSend, setIsSend] = useState(false)

  const messageText = (e) => {
    let contents = e.target.value
    contents = contents.replaceAll('\r\n', '<br>')
    setContent(contents)
    console.log(contents)
  }
  // 엔터키 변경해서 받아야 함
  const newNickname = (e) => {
    setNickname(e.target.value);
  }
  const saveData = () => {
    setIsSend(true)
    console.log(isSend)
    const dummyDataObj = {
      id: dummyData.length + 1,
      nickname,
      content
    }
    const newDummyData = [
      ...dummyData,
      dummyDataObj
    ]
    localStorage.setItem('dummyData', JSON.stringify(newDummyData))
    setDummyData(JSON.parse(localStorage.getItem("dummyData")))
    let index = 0;
    const userDataArr = userData.filter((e,i) => {
      if(e.id === sharedId){
        index = i
      }
      return e.id === sharedId
    })
    const userDataObj = {
      id: userDataArr[0].id,
      pw: userDataArr[0].pw,
      field: userDataArr[0].field,
      contentLst: !userDataArr[0].contentLst ? [dummyDataObj.id] : [
        ...userDataArr[0].contentLst,
        dummyDataObj.id
      ]
    }
    console.log(userDataArr[0].contentLst)
    const saveDatas = [...userData]
    saveDatas[index] = userDataObj
    localStorage.setItem('userData',JSON.stringify(saveDatas))
    setUserData(JSON.parse(localStorage.getItem('userData')))
  }
  
  const [isOpen, setIsOpen] = useState(false)
  const openModalHandler = () => {
    setIsOpen(true)
  }
  const editTextarea=()=>{
    setIsOpen(false)
  }

  const CheckModal = ({ isSend, setIsSend }) => {
    useEffect(() => {
      setTimeout(() => {
        setIsSend(false)
        navigate('/')
      }, 3000)
    }, [])
    return (
      <div className='complete'>
      친구의 당근 밭에 당근을 심었어요 ! 🥕🐰🥕
      <br />
      <span>잠시 후 메인 페이지로 이동해요.</span>
    </div>
    )
  }
  
  const ReWrite = ({ content, nickname, isSend, setIsSend }) => {
    return (
      <FormCenter action='' method='get' onSubmit={(e) => e.preventDefault()}>
        <ModalBackDrop>
          {!isSend ?
          <div className='message'>
            <WriterNickname><span>{`To. ${sharedUserField}`}</span></WriterNickname>
            <Message><pre>{content}</pre></Message>
            <div className='message'><span>From. {nickname}</span></div>
            <ButtonContainer>
              <ModalBtn onClick={editTextarea}>수정하기</ModalBtn><ModalBtn onClick={() => {saveData();}}>보내기</ModalBtn>
            </ButtonContainer>
          </div>
           : <CheckModal setIsSend={setIsSend}/>
           }
        </ModalBackDrop>
      </FormCenter>
    )
  }

  return (
    <div className='wrap'>
      <WriteForm>
        <Owner>To. {sharedUserField}</Owner>
        {/* 받는 사람 (기존) 아이디 -> (변경)닉네임 */}
        <WriteTextArea maxLength={300} value={content} onChange={messageText} />
        <NicknameBox>
          <NicknameLabel>From.</NicknameLabel>
          <BaseInput type='text' value={nickname} onChange={newNickname} borderColor={'var(--white)'} background={'var(--white)'} color={'var(--black)'} />
        </NicknameBox>
        <BaseButton className='eff-raise' onClick={openModalHandler} marginTop={'var(--gap-big)'}>당근 보내기</BaseButton>
      </WriteForm>
      {
        isOpen ? <ReWrite sharedId={sharedId} dummyData={dummyData} content={content} nickname={nickname} isSend={isSend} setIsSend={setIsSend}/> : null
      }
    </div>
  )
}


export default Write