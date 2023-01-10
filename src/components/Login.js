import React, { useState, Fragment } from 'react'
// import userData from '../datas/userData.json'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = styled.form`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const LoginBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: var(--gap-md);
`;
const LoginIp = styled.input`
    width: var(--ip-big-w);
    height: var(--ip-big-h);
    border: 1px solid var(--maincolor);
    border-radius: var(--bd-rd-sm);
    padding: 0 var(--gap-sm);
    transition: var(--trans);
    &:focus{
        box-shadow: var(--shadow);
        transition: var(--trans);
    }
`;
const LoginLabel = styled.label`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--fz-md);
    font-weight: bold;
    text-transform: uppercase;
    pointer-events: none;
    color: var(--gray);
    background: #fff;
    transition: var(--trans);
    ${LoginIp}:focus ~ &,
    ${LoginIp}:valid ~ & {
        top: 0;
        font-size: var(--fz-sm);
        transition: var(--trans);
    };
`;

const Button = styled.button`
    width: var(--btn-big-w);
    height: var(--btn-big-h);
    background-color: var(--green);
    border-radius: var(--bd-rd-big);
    border: none;
    margin-top: var(--gap-sm);
`

const Login = ({ userData, setUserInfo }) => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    // 버튼 누른 상태?
    // 나한테 왜 이래애애애애앵

    const navigate = useNavigate();

    const handleInputId = (event) => {
        setInputId(event.target.value);
    };

    const handleInputPw = (event) => {
        setInputPw(event.target.value);
    };

    // 로그인 버튼 onClick에 들어갈 함수
    // -> if 아이디가 유저아이디 중에 있고 패스워드가 맞으면 마이페이지로 넘어가기
    // 아니면 alert
    const loginBtn = (e) => {
        e.preventDefault();
        // inputId, inputPw -> 더미데이터 비교해서 있으면 마이페이지로 넘어가고
        // 아니면 알림창 띄우기
        const arr = userData.filter(el => el.id === inputId && el.pw === inputPw);
        if (arr.length === 1) {
            navigate('/mypage');
            // 로그인 된 유저를 상태관리 추가하기
            setUserInfo(arr)
            // 로그인하면 마이페이지에도 '***네 당근밭'처럼 로그인 정보가 들어있어야 함
            // 로그인 버튼 누르는 순간에 이걸 상태로 가지고 마이페이지에 넘겨줘야 마이페이지에서 닉네임을 쓸 수 있을 것 같음
            // 그래서 로그인 js와 마이페이지 js의 상위 컴포넌트인 App에서 상태관리를 해줘야 할 것 같음
            // App에서 useState로 nickname, setNickname 설정해서(초기값 null?빈문자열?) 로그인에는 setNickname을 props로 넘겨주고
            // 마이페이지에는 nickName를 넘김
            // 마이페이지 -> 닉네임, 편지 넘겨주면 어떨지
        }
        else if (arr.length === 0) {
            alert('회원정보가 일치하지 않습니다');
        }
    }

    return (
        <Fragment>
            <div className='wrap'>
                <LoginForm>
                    <LoginBox>
                    <LoginIp type="text" id='ID' value={inputId} onChange={handleInputId} required/>
                    <LoginLabel for="ID">아이디</LoginLabel>
                    </LoginBox>
                    {/* password 적는 input*/}
                    <LoginBox>
                    <LoginIp type="password" id='PASSWORD' value={inputPw} onChange={handleInputPw} required/>
                    <LoginLabel for="">비밀번호</LoginLabel>
                    </LoginBox>
                    {/*버튼 -> 로그인 / 회원가입 버튼*/}
                    <Button className='eff-fill' onClick={loginBtn}>로그인</Button>
                    {/*회원가입 버튼 ->*/}
                    <Link to="/join"><Button className='eff-fill'>회원가입</Button></Link>
                    {/*삼항연산자 -> 어떤 상태 속성이 true 됐을 때만 회원가입 버튼이 뜨게 하자 */}
                    {/* close 버튼 -> Index.js로 이동
            <button>닫기</button> */}
                </LoginForm>
            </div>
        </Fragment>
    )
}

export default Login