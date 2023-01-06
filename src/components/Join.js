import React, { Fragment, useState } from 'react'
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
    const [ userId, setUserID ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')
    console.log(userData)

    const handleUserData = () => {
        const newUserData = [...userData, {
            id: userId,
            pw: userPassword
        }]
        setUserData(newUserData)
    }
    return (
        <Fragment>
            <div className='wrap'>

                <ExampleBox>
                    <ExampleP>logo</ExampleP>
                    <ExampleP>title</ExampleP>
                    <ExampleP>mypage</ExampleP>
                </ExampleBox>

                <JoinForm action='' method='get'>
                    <JoinBox>
                        <JoinIp type='text' title='joinId' id='joinId' onKeyUp={setUserID} required />
                        <JoinLabel for='joinId'>아이디</JoinLabel>
                    </JoinBox>
                    <JoinBox>
                        <JoinIp type='password' title='joinPw' id='joinPw' onKeyUp={setUserPassword} required />
                        <JoinLabel for='joinPw'>비밀번호</JoinLabel>
                    </JoinBox>
                    <JoinBox>
                        <JoinIp type='password' title='joinPwConfirm' id='joinPwConfirm' required />
                        <JoinLabel for='joinPwConfirm'>비밀번호 확인</JoinLabel>
                    </JoinBox>
                    <JoinBtn onClick={handleUserData}>가입하기</JoinBtn>
                </JoinForm>
            </div>
        </Fragment>
    )
}

export default Join