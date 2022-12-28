import React, { useState } from 'react'
{/*import user 더미데이터 */ }
{/*react-router-dom을 써야 하나? */ }
import { Link } from 'react-router-dom';


const Login = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

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
    const loginBtn = () => {
        if (inputId === 'yjyaang' && inputPw === '1234') {
            {/*마이페이지로 넘어가기 */ }
            {/*history.push(/mypage) */}
        }
        else {
            alert('회원정보가 일치하지 않습니다')
        }
    }

    {/*회원가입 버튼 onClick에 들어갈 함수
    -> Auth.js로 이동 */}

    return (
        <div>
            <div>LOGIN</div>
    // id를 적는 input
            <input  type="text" placeholder='ID' value={inputId} onChange={handleInputId}></input>
            {/* password 적는 input*/}
            <input  type="password" placeholder='PASSWORD' value={inputPw} onChange={handleInputPw}></input>

            {/*버튼 -> 로그인 / 회원가입 버튼*/}
            <button onClick={loginBtn}>로그인</button>
            {/*로그인 버튼 성공 ->
            버튼 누르면 input의 value를 유저 더미데이터랑 비교해서
            일치하는 경우 Mypage.js로 이동*/}
            {/*로그인 버튼 실패 -> alert(회원정보가 일치하지 않습니다)*/}

            {/*회원가입 버튼 ->*/}
            <Link to="/auth"><button>회원가입</button></Link>
            {/* close 버튼 -> Index.js로 이동
            <button>닫기</button> */}
        </div>
    )
}

export default Login