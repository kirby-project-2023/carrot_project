import { clear } from '@testing-library/user-event/dist/clear';
import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';

const ExampleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--gap-sm);
    max-width: 768px;
    margin: 0 auto 100px;
    @media (max-width: 768px){
        width: 100%;
        padding: 0 var(--gap-md);
    }
`;
const ExampleP = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    @media (max-width: 768px){
        background: var(--green);
        color: #fff;
    }
`;

const JoinForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const JoinBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: var(--gap-md);
`;
const JoinIp = styled.input`
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
const JoinLabel = styled.label`
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
    ${JoinIp}:focus ~ &,
    ${JoinIp}:valid ~ & {
        top: 0;
        font-size: var(--fz-sm);
        transition: var(--trans);
    };
`;
const JoinBtn = styled.button`
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
    }
`;

const privateData = () => {
    const arr = []
    return (
        <div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
        </div>
    )
}

const Join = ({ userData, setUserData }) => {
    const [ userInfo, setUserInfo ] = useState({
        id: '',
        pw: '',
        pwConfirm: ''
    })
    const [ isIncorrect, setIsIncorrect ] = useState(false)
    const handleIdInput = (key) => (event) => {
        let user = {}
        user = {
            ...userInfo, 
            [key]: event.target.value
        }
        setUserInfo(user)
    }

    useEffect(() => {
        passwordConfirm()
    }, [ userInfo ])

    const passwordConfirm = () => {
        if (userInfo.pw !== userInfo.pwConfirm) {
            // 비밀번호 틀렸다고 말해주기
            setIsIncorrect(true)
        } else {
            setIsIncorrect(false)
        }
    }
    
    const handleUserData = (event) => {
        event.preventDefault()
        const { id ,pw } = userInfo
        if (isIncorrect || checkUserData()) {
        // 회원가입 반려
            alert('중복된 Id 이거나 비밀번호가 유효하지 않습니다.')
        }
        else if (!checkUserData()) {
            setUserData([
                ...userData,
                {
                    id,
                    pw
                }
            ])
            initState()
        }
    }
    // field 지정을 회원가입에서 해야하는지 확인하기 !

    const initState = () => {
        setUserInfo({
            id: '',
            pw: '',
            pwConfirm: ''
        })
        setIsIncorrect(false)
    }

    const checkUserData = () => {
        // user가 입력한 데이터 받아서
        // 1. user ID 가 데이터에 중복 없는지
        // 2. 입력한 password === passwordconfirm과 같은지
        return userData.some(((user) => user.id === userInfo.id))
    }

    console.log(userData)
    return (
        <Fragment>
            <div className='wrap'> 

                <ExampleBox>
                    <ExampleP>logo</ExampleP>
                    <ExampleP>title</ExampleP>
                    <ExampleP>mypage</ExampleP>
                </ExampleBox>

                <JoinForm action='' method='get' onSubmit={handleUserData}>
                    <JoinBox>
                        <JoinIp type='text' title='joinId' id='joinId' onChange={handleIdInput('id')} value={userInfo.id} required />
                        <JoinLabel for='joinId'>아이디</JoinLabel>
                    </JoinBox>
                    <JoinBox>
                        <JoinIp type='password' title='joinPw' id='joinPw' onChange={handleIdInput('pw')} value={userInfo.pw} required />
                        <JoinLabel for='joinPw'>비밀번호</JoinLabel>
                    </JoinBox>
                    <JoinBox>
                        <JoinIp type='password' title='joinPwConfirm' id='joinPwConfirm' onChange={handleIdInput('pwConfirm')} value={userInfo.pwConfirm} required />
                        <JoinLabel for='joinPwConfirm'>비밀번호 확인</JoinLabel>
                    </JoinBox>
                    <JoinBox><div>{isIncorrect ? '비밀번호가 같지 않습니다.' : '' }</div></JoinBox>
                    <JoinBtn type='submit'>가입하기</JoinBtn>
                </JoinForm>
            </div>
        </Fragment>
    )
}

export default Join