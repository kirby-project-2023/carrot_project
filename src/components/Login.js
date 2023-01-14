import React, { useState } from 'react'
// import userData from '../datas/userData.json'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BaseInputBox, BaseInput, BaseLabel, BaseButton } from '../styles/style';

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

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
            localStorage.setItem("userInfo",JSON.stringify(arr))
            setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
            // 로그인 된 유저를 상태관리 추가하기
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
        <div className='wrap'>
            <LoginForm>
                <BaseInputBox>
                    <BaseInput type="text" id='ID' value={inputId} onChange={handleInputId} required/>
                    <BaseLabel for="ID">아이디</BaseLabel>
                </BaseInputBox>
                {/* password 적는 input*/}
                <BaseInputBox>
                    <BaseInput type="password" id='PASSWORD' value={inputPw} onChange={handleInputPw} required/>
                    <BaseLabel for="">비밀번호</BaseLabel>
                </BaseInputBox>
                {/*버튼 -> 로그인 / 회원가입 버튼*/}
                <BaseButton onClick={loginBtn}>로그인</BaseButton>
                {/*회원가입 버튼 ->*/}
                <Link to="/join"><BaseButton>회원가입</BaseButton></Link>
                {/*삼항연산자 -> 어떤 상태 속성이 true 됐을 때만 회원가입 버튼이 뜨게 하자 */}
                {/* close 버튼 -> Index.js로 이동
        <button>닫기</button> */}
            </LoginForm>
        </div>
    )
}

export default Login