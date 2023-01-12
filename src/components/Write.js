import React, { useState } from 'react'
import styled from 'styled-components';

const WriteForm = styled.div`
  padding: var(--gap-large);
  background: var(--carrot);
  width: 100%; height: calc(100vh - 100px);
`;
const Owner = styled.h2`
  color: #fff;
  font-size: var(--fz-big);
`;
const WriteTextArea = styled.textarea`
  width: 100%;
  height: var(--text-h);
  background: #fff;
  resize: none;
  margin-top: var(--gap-big);
  padding: var(--gap-big);
  border-radius: var(--bd-rd-big);
`;
const NicknameBox = styled.div`
  display: flex; justify-content: flex-end; align-items: center;
  margin-top: var(--gap-big);
`;
const NicknameIp = styled.input`
  width: var(--ip-big-w);
  height: var(--ip-big-h);
  background: #fff;
  border-radius: var(--bd-rd-sm);
  padding: var(--gap-sm);
`;
const NicknameLabel = styled.label`
  color: #fff;
  font-size: var(--fz-big);
  padding-right: var(--gap-md);
`;
const WriteBtn = styled.button`
  width: var(--btn-big-w);
  height: var(--btn-big-h);
  background: var(--green);
  color: #fff;
  border-radius: var(--bd-rd-sm);
  margin: var(--gap-large) auto 0;
  display: block;
  cursor: pointer;
  &:hover{
    background: var(--night);
    transition: var(--trans);
  }
`;


//ReWrite Modal
const WriteWrap = styled.form`
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
`
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
`

const WriterNickname = styled.div`
    width: 200px;
    height: 50px;
    background: var(--silver);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled.button`
  display: flex;
`

const ModalBtn = styled.button`
    position: relative;
    width: var(--ip-big-w);
    height: var(--ip-big-h);
    text-align: center;
    background: var(--maincolor);
    border-radius: var(--bd-rd-sm);
    color: #fff;
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
    background: none;
`

const Write = ({ userInfo, dummyData, sharedId }) => {
  const [content, setContent] = useState('');
  const [nickname, setNickname] = useState('');

  const messageText = (e)=>{
    setContent(e.target.value);
    console.log(e.target.value)
  }
  const newNickname = (e)=>{
    setNickname(e.target.value);
    console.log(e.target.value);
  }
  // nickname + content 데이터 받아서 dummyData.js 에 신규 아이디로 추가해야함
  // userData.js 에서는 contentLst 에 추가된 신규 아이디 임의로? 넣어주고 그 field 에서 content 보여줘야함

  const [ isOpen, setIsOpen ] = useState(false)
  const openModalHandler = () => {
    setIsOpen(true)
  }

  const ReWrite = ({ messageText, newNickname, sharedId }) => {

    return (
      <WriteWrap className='wrap' action='' method='get' onSubmit={(e) => e.preventDefault()}>
        <ModalBackDrop>
          <div className='backdrop'>
          <WriterNickname><span>{sharedId}</span></WriterNickname>
          <Message>{messageText}</Message>
          <div><span>From. {newNickname}</span></div>
          <ButtonContainer>
            <ModalBtn>수정하기</ModalBtn><ModalBtn>보내기</ModalBtn>
          </ButtonContainer>
          </div>
        </ModalBackDrop>
      </WriteWrap>
    )
}

  return (
      <div>
          <WriteForm>
              <Owner>To. {sharedId}</Owner>
              <WriteTextArea maxLength={300} value={content} onChange={messageText} />
              <NicknameBox>
                  <NicknameLabel>From.</NicknameLabel>
                  <NicknameIp type='text' value={nickname} onChange={newNickname} />
              </NicknameBox>
              <WriteBtn className='eff-raise' onClick={openModalHandler}>당근 보내기</WriteBtn>
          </WriteForm>
          {
            isOpen ? <ReWrite sharedId={sharedId} dummyData={dummyData} messageText={messageText} newNickname={newNickname}/> : null
          }
      </div>
  )
}


export default Write