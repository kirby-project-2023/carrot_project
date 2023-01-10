import { clear } from '@testing-library/user-event/dist/clear';
import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';


// Private Check
const PrivateWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%; height: 100%;
    &:after {
        content: '';
        position: absolute;
        left: 0; right: 0; top: 0; bottom: 0;
        background: var(--night);
    }
`;
const PrivateCont = styled.div`
    position: relative;
    border: 1px solid white;
    padding: 50px 80px;
    background: #fff;
    position: relative;
    z-index: 10;
    border-radius: var(--bd-rd-big);
`;
const PrivateBox = styled.div`
    position: relative;
    z-index: 1;
`;
const PrivateCheck = styled.input`
    position: relative;
    opacity: 0;
    visibility: hidden;
`;
const PrivateLabel = styled.label`
    position: relative;
    padding-left: 20px;
    display: block;
    margin-bottom: var(--gap-sm);
    color: var(--maincolor);
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        left: 0; top: 3px; width: 12px; height: 12px; border: 1px solid var(--maincolor);
    }
    &:before {
        content: '';
        position: absolute;
        z-index: 1;
        left: 2px; top: 4px; width: 7px; height: 5px;
        border-bottom: 2px solid var(--white);
        border-left: 2px solid var(--white);
        transform: rotate(-45deg);
        opacity: 0;
    }
    ${PrivateCheck}:checked ~ &:after {
        background: var(--maincolor);
        border-color: var(--maincolor);
    }
    ${PrivateCheck}:checked ~ &:before {
        opacity: 1;
    }
`;
const PrivateTextarea = styled.div`
    border: 1px solid var(--gray);
    width: var(--ip-big-w);
    height: calc(var(--ip-big-h) * 2);
    overflow-y: scroll;
    padding: var(--gap-sm);
    font-size: var(--fz-sm);
    line-height: 1.2;
    background: #fff;
`;
const CloseCheckbox = styled.span`
    position: absolute;
    right: 30px; top: 30px;
    font-size: var(--fz-large);
    color: var(--night);
    cursor: pointer;
`;

// Join Form
const JoinForm = styled.form`
    display: flex;
    height: 100vh;
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
    position: relative;
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
    };
    ${PrivateCont} > & {
        z-index: 10;
        margin-top: var(--gap-md)
    }
    ${PrivateCont} > &.deactive {
        background: var(--gray);
        box-shadow: none;
        transition: none;
        cursor: initial;
        pointer-events: none;
    }
`;




const Join = ({ userData, setUserData }) => {
    const [ userInfo, setUserInfo ] = useState({
        id: '',
        field: '',
        pw: '',
        pwConfirm: ''
    })
    const [ isIncorrect, setIsIncorrect ] = useState(false)
    const [ checkPopup, setCheckPopup ] = useState(false);
    const handleIdInput = (key) => (event) => {
        let user = {}
        user = {
            ...userInfo, 
            [key]: event.target.value
        }
        setUserInfo(user)
    }
    const navigate = useNavigate();

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
        else if (checkItems.length === privateData.length && !checkUserData()) {
            setUserData([
                ...userData,
                {
                    id,
                    pw
                }
            ])
            initState()
            navigate('/login')
        }
    }
    // field 지정을 회원가입에서 해야하는지 확인하기 !

    const initState = () => {
        setUserInfo({
            id: '',
            field: '',
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
    const checkClick = () => {
        if (checkItems.length !== privateData.length) {
            // 팝업이 뜨고
            setCheckPopup(true)
        } else {
            setCheckPopup(false)
        }
    }

    const privateData = [
        {
            id:0, 
            label: '이용약관 동의1',
            text: `여러분을 환영합니다.
            네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
            다양한 네이버 서비스를 즐겨보세요.`
        },
        {
            id:1, 
            label: '이용약관 동의2',
            text: `여러분을 환영합니다.
            네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
            다양한 네이버 서비스를 즐겨보세요.`
        },
        {
            id:2, 
            label: '이용약관 동의3',
            text: `여러분을 환영합니다.
            네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
            다양한 네이버 서비스를 즐겨보세요.`
        }
    ]
    const [checkItems, setCheckItems] = useState([])
    const handleAllCheck = (checked) => {
        if (checked) {
          const idArray = []
          privateData.forEach((el) => idArray.push(el.id))
          setCheckItems(idArray)
        } else {
          setCheckItems([])
        }
      }
    
      const handleSingleCheck = (checked, id) => {
        if (checked) {
          setCheckItems(prev => [...prev, id])
        } else {
          setCheckItems(checkItems.filter((el => el !== id)))
        }
      }

    const PrivateData = () => {
        return (
            <PrivateWrap>
                <PrivateCont>
                    <CloseCheckbox onClick={checkClick}>&times;</CloseCheckbox>
                    <PrivateBox>
                    <PrivateCheck type='checkbox' id='privateCheckAll' onChange={(event) => {
                        handleAllCheck(event.target.checked)}}
                        checked={checkItems.length === privateData.length ? true : false}
                        />
                        <PrivateLabel for='privateCheckAll'>약관 전체 동의</PrivateLabel>
                    </PrivateBox>
                    {privateData.map((data, id) => {
                        return (
                            <div key={id}>
                            <PrivateCheck type='checkbox' id={`ip${id}`} onChange={(event) => {
                            handleSingleCheck(event.target.checked, data.id)}}
                            checked={checkItems.includes(data.id) ? true : false}/>
                            <PrivateLabel for={`ip${id}`} >{data.label}</PrivateLabel>
                            <PrivateTextarea>{data.text}</PrivateTextarea>
                        </div>
                        )
                        })}
                    <JoinBtn className={checkItems.length === privateData.length ? 'active' : 'deactive'} onClick={checkClick} >개인정보동의완료</JoinBtn>
                </PrivateCont>
            </PrivateWrap>
        )
    }


    console.log(userData)

    return (
        <Fragment>
            <div className='wrap'>
                <JoinForm action='' method='get' onSubmit={handleUserData}>
                    <JoinBox>
                        <JoinIp type='text' title='joinId' id='joinId' onChange={handleIdInput('id')} value={userInfo.id} required />
                        <JoinLabel for='joinId'>아이디</JoinLabel>
                    </JoinBox>
                    <JoinBox>
                        <JoinIp type='text' title='joinField' id='joinField' onChange={handleIdInput('field')} value={userInfo.field} required />
                        <JoinLabel for='joinField'>닉네임</JoinLabel>
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
                    <JoinBtn type='submit' onClick={checkClick} >{checkItems.length === privateData.length ? '가입하기' : '개인정보동의'}</JoinBtn>
                </JoinForm>
                {
                    checkPopup ? <PrivateData/> : null
                }
            </div>
        </Fragment>
    )
}

export default Join