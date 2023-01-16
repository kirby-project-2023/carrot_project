import React, { useState } from 'react'
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
  .backdrop {
    background: var(--green);
    padding: 10px;
    display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;
const WriterNickname = styled.div`
  width: 200px;
  height: 50px;
  background: var(--silver);
  text-align: center;
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
  height: 400px;
  background: white;
  margin: 20px 0;
`;

const Write = ({ userData, setUserData, dummyData, sharedId, setDummyData }) => {
  
  const [content, setContent] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate()
  const messageText = (e) => {
    setContent(e.target.value);
  }
  const newNickname = (e) => {
    setNickname(e.target.value);
  }
  const saveData = () => {
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
  
  const ReWrite = ({ content, nickname, sharedId }) => {
    return (
      <FormCenter action='' method='get' onSubmit={(e) => e.preventDefault()}>
        <ModalBackDrop>
          <div className='backdrop'>
            <WriterNickname><span>{sharedId}</span></WriterNickname>
            <Message>{content}</Message>
            <div><span>From. {nickname}</span></div>
            <ButtonContainer>
              <ModalBtn onClick={editTextarea}>수정하기</ModalBtn><ModalBtn onClick={() => {saveData(); navigate('/')}}>보내기</ModalBtn>
            </ButtonContainer>
          </div>
        </ModalBackDrop>
      </FormCenter>
    )
  }

  return (
    <div className='wrap'>
      <WriteForm>
        <Owner>To. {sharedId}</Owner>
        <WriteTextArea maxLength={300} value={content} onChange={messageText} />
        <NicknameBox>
          <NicknameLabel>From.</NicknameLabel>
          <BaseInput type='text' value={nickname} onChange={newNickname} borderColor={'var(--white)'} background={'var(--white)'} color={'var(--black)'} />
        </NicknameBox>
        <BaseButton className='eff-raise' onClick={openModalHandler} marginTop={'var(--gap-big)'}>당근 보내기</BaseButton>
      </WriteForm>
      {
        isOpen ? <ReWrite sharedId={sharedId} dummyData={dummyData} content={content} nickname={nickname} /> : null
      }
    </div>
  )
}


export default Write