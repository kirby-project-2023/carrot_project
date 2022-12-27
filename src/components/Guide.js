import React from 'react'
import styled from 'styled-components';
import '../styles/guide.css'

// ? styled Component 쓸 경우 예시
const Galmuri = styled.div`
  font-family: var(--font-galmuri);
`;
const InputBig = styled.input`
  width: var(--ip-big-w);
  height: var(--ip-big-h);
  padding: var(--ip-big-p);
  border: 2px solid var(--maincolor);
  border-radius: var(--bd-rd-big);
`
const BtnBig = styled.button`
  width: var(--btn-big-w);
  height: var(--btn-big-h);
  text-align: center;
  border: 2px solid var(--maincolor);
  border-radius: var(--bd-rd-big);
  background: var(--maincolor);
  color: var(--white);
  cursor: pointer;
`
const BtnSm = styled(BtnBig)`
  width: var(--btn-sm-w);
  height: var(--btn-sm-h);
`
const Guide = () => {
  return (
    <div>
      <div className='area'>
          <h2>1. 포인트 폰트</h2>
          <Galmuri><h1>1번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1></Galmuri>
          <h1 className='font5'>5번: 커비의 당근밭  <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
          <h1 className='font6'>6번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
          <h1 className='font8'>8번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
          <h1 className='font9'>9번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
          <h1 className='font11'>11번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
      </div>
      <div className='area'>
        <h2>2. 기본 폰트</h2>
        <h1 className='font2'>2번: 커비의 당근밭  <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font3'>3번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font4'>4번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font7'>7번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font10'>10번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font12'>12번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font13'>13번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
      </div>
      <div className='area'>
        <h2>3. 컬러 팔레트</h2>
        <div className='flex'>
          <div className='box silver'></div>
          <div className='box gray'></div>
          <div className='box black'></div>
          <div className='box yellow'></div>
          <div className='box night'></div>
          <div className='box carrot'></div>
          <div className='box green'></div>
          <div className='box pink'></div>
          <div className='box pale'></div>
        </div>
      </div>
      <div className='area flex'>
        <div className='w2'>
          <h2>4. 인풋 스타일1</h2>
          <div className='mb-sm'>
            <InputBig type='text' placeholder='아이디'/>
          </div>
          <div className='mb-sm'>
            <InputBig type='password' placeholder='비밀번호' />
          </div>
          <div className='mb-sm'>
            <BtnBig>로그인</BtnBig>
          </div>
        </div>
        <div className='w2'>
          <h2>5. 인풋 스타일2</h2>
          <div className='mb-sm'>
            <InputBig type='text' placeholder='아이디'/>
          </div>
          <div className='mb-sm'>
            <InputBig type='password' placeholder='비밀번호' />
          </div>
          <div className='mb-sm'>
            <BtnSm className='mr-sm'>로그인</BtnSm>
            <BtnSm>회원가입</BtnSm>
          </div>
        </div>
      </div>
      <div className='area'>
        <h2>6. hover effect</h2>
        <div className='flex'>
          <div className='box mr-sm green eff-pulse'></div>
          <div className='box mr-sm green eff-fill'></div>
          <div className='box mr-sm green eff-raise'></div>
        </div>
      </div>
    </div>
  )
}

export default Guide