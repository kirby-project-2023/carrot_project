import React, { Fragment } from 'react'
import styled from 'styled-components';

const JoinForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
const JoinIp = styled.input`
    width: var(--ip-big-w);
    height: var(--ip-big-h);
    border: 1px solid var(--maincolor);
    border-radius: var(--bd-rd-sm);
    padding: 0 var(--gap-sm);
    transition: var(--trans);
    margin-bottom: var(--gap-sm);
    &:focus{
        box-shadow: var(--shadow);
        transition: var(--trans);
    }
`;
const JoinLabel = styled.label`
    font-size: var(fz-big);
    font-weight: bold;
    text-transform: uppercase;
    display: block;
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

const Join = () => {
    return (
        <Fragment>
            <JoinForm action='' method='get'>
                <div>
                    <JoinLabel>ID</JoinLabel>
                    <JoinIp type='text' />
                </div>
                <div>
                    <JoinLabel>PASSWORD</JoinLabel>
                    <JoinIp type='password' />
                </div>
                <div>
                    <JoinLabel>PASSWORD 확인</JoinLabel>
                    <JoinIp type='password' />
                </div>
                <JoinBtn>가입하기</JoinBtn>
            </JoinForm>
        </Fragment>
    )
}

export default Join