import React, { useState } from 'react'
{/*import user 더미데이터 */ }
{/*react-router-dom을 써야 하나? */ }
import { Link, useHistory } from 'react-router-dom';

const user = [{
    id: 'aaa',
    pw: '1234'
}];

const Login = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    {/*버튼 누른 상태? */}

    const history = useHistory();

    const handleInputId = (event) => {
        setInputId(event.target.value);
    };

    const handleInputPw = (event) => {
        setInputPw(event.target.value);
    };

    {/*useHistory()  사용*/}
    {/*로그인 버튼 onClick에 들어갈 함수
    -> if 아이디가 유저아이디 중에 있고 패스워드가 맞으면 마이페이지로 넘어가기
    아니면 alert*/}
    const loginBtn = (e) => {
        e.preventDefault();
        {/*inputId, inputPw -> 더미데이터 비교해서 있으면 마이페이지로 넘어가고
        아니면 알림창 띄우기*/}
        const arr = user.filter(el => el.id === inputId && el.pw === inputPw);
        if(arr.length === 1) {
            history.push('/mypage');
        }
        else if(arr.length === 0) {
            alert('회원정보가 일치하지 않습니다');
        }
    }

    return (
        <div>
            <div>LOGIN</div>
    // id를 적는 input
            <input  type="text" placeholder='ID' value={inputId} onChange={handleInputId}></input>
            {/* password 적는 input*/}
            <input  type="password" placeholder='PASSWORD' value={inputPw} onChange={handleInputPw}></input>

            {/*버튼 -> 로그인 / 회원가입 버튼*/}
            <button onClick={loginBtn}>로그인</button>
            {/*회원가입 버튼 ->*/}
            <Link to="/auth"><button>회원가입</button></Link>
            {/*삼항연산자 -> 어떤 상태 속성이 true 됐을 때만 회원가입 버튼이 뜨게 하자 */}
            {/* close 버튼 -> Index.js로 이동
            <button>닫기</button> */}
        </div>
    )
}

export default Login