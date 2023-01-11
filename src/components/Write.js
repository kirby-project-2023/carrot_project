import React, {useState} from 'react'
import styled from 'styled-components';

const WriteForm = styled.form`
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

const Write = ({ userInfo, dummyData }) => {
  const [textarea, setTextarea] = useState('');
  // nickname + content 데이터 받아서 dummyData.js 에 신규 아이디로 추가해야함
  // userData.js 에서는 contentLst 에 추가된 신규 아이디 임의로? 넣어주고 그 field 에서 content 보여줘야함



  return (
    <div>
      <WriteForm action='' method='get'>
        <Owner>To. 커비왕</Owner>
        <WriteTextArea maxLength={300} />
        <NicknameBox>
          <NicknameLabel>From.</NicknameLabel>
          <NicknameIp type='text' />
        </NicknameBox>
        <WriteBtn className='eff-raise'>당근 보내기</WriteBtn>
      </WriteForm>
    </div>
  )
}

export default Write