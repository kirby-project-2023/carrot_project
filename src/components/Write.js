import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FormCenter,BaseInput,BaseButton,SmallButton,ModalBack } from '../styles/style';
import {useNavigate} from 'react-router-dom'
import { getCollectionData, addCollectionData, updateDocData } from '../firebase/api'

const WriteForm = styled.div`
  width: 100%;
`;
const Owner = styled.h2`
  color: var(--white);
  font-size: var(--fz-big);
  &.owner_rewrite {
    color: var(--black);
    text-align: center;
  }
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
const ModalContent = styled.div`
  position: absolute;
  left: 50%; top: 50%; transform: translate(-50%,-50%);
  // 위에 두 줄 세트로 하면 얘를 화면 가운데로 가져다 줌
  background: var(--green);
  border-radius: 15px;
  padding: 10px;
  width: 80%;
  height: 40vh;
  color: white;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px){
    height: 60vh;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 80%;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const Message = styled.div`
  width: 100%;
  height: 20vh;
  background: rgba( 255, 255, 255, 0.2 );
  padding: 10px;
  overflow: auto;
  margin: 20px 0;
  text-align: center;
  > pre {white-space: break-spaces; text-align: initial;}
`;


const Write = ({ userData, setUserData, dummyData, sharedId, setDummyData }) => {
  console.log(userData)
  const [content, setContent] = useState('');
  const [nickname, setNickname] = useState('');
  const sharedUser = userData.filter((el) => el.id === sharedId)
  const sharedUserField = sharedUser.length == 0 ? '' : sharedUser[0].field
  // 당근 밭 주인의 닉네임
  const navigate = useNavigate()
  const [isSend, setIsSend] = useState(false)

  const messageText = (e) => {
    let contents = e.target.value
    contents = contents.replaceAll('\r\n', '<br>')
    setContent(contents)
  }
  // 엔터키 변경해서 받아야 함
  const newNickname = (e) => {
    setNickname(e.target.value);
  }
  const saveData = () => {
    setIsSend(true)
    const dummyDataObj = {
      id: dummyData.length + 1,
      nickname,
      content
    }
    const newDummyData = [
      ...dummyData,
      dummyDataObj
    ]

    addCollectionData('dummyData', dummyDataObj)
    getCollectionData('dummyData').then(data => setDummyData(data))

    let index = 0;
    const userDataArr = userData.filter((e,i) => {
      if(e.id === sharedId){
        index = i
      }
      return e.id === sharedId
    })

    const update = {
      contentLst: !userDataArr[0].contentLst ? [dummyDataObj.id] : [
        ...userDataArr[0].contentLst,
        dummyDataObj.id
      ]
    }
    updateDocData('userData', userDataArr[0].docId, update)
    getCollectionData('userData').then(data => setUserData(data))
  }
  
  const [isOpen, setIsOpen] = useState(false)
  const openModalHandler = () => {
    setIsOpen(true)
  }
  const editTextarea=()=>{
    setIsOpen(false)
  }

  const CheckModal = ({ setIsSend }) => {
    useEffect(() => {
      setTimeout(() => {
        setIsSend(false)
        navigate('/')
      }, 1500)
    }, [])
    return (
      <div className='complete' style={{textAlign:'center'}}>
      친구의 당근 밭에 당근을 심었어요 ! 🥕🐰🥕
      <br />
      <span>잠시 후 메인 페이지로 이동해요.</span>
    </div>
    )
  }
  
  const ReWrite = ({ content, nickname, isSend, setIsSend }) => {
    return (
      <FormCenter action='' method='get' onSubmit={(e) => e.preventDefault()}>
        <ModalBack>
          <ModalContent>
            {!isSend ?
              <ContentContainer>
                <Owner className='owner_rewrite'>{`To. ${sharedUserField}`}</Owner>
                <Message><pre>{content}</pre></Message>
                <span>From. {nickname}</span>
                <ButtonContainer>
                  <SmallButton onClick={editTextarea} style={{ marginRight: '10px' }} background='var(--maincolor)' hoverBg='var(--yellow)' shadow='var(--shadow)'>수정하기</SmallButton><SmallButton onClick={() => { saveData(); }} background='var(--maincolor)' hoverBg='var(--yellow)' shadow='var(--shadow)'>보내기</SmallButton>
                </ButtonContainer>
              </ContentContainer>
              : <CheckModal setIsSend={setIsSend} />
            }
          </ModalContent>
        </ModalBack>
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