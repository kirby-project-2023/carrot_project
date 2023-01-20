import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FormCenter, BaseInputBox, BaseInput, BaseLabel, BaseButton } from '../styles/style';
import { ModalWrap, ModalBack, ModalContent } from '../styles/style';

// Private Check
const PrivateBox = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 0 var(--gap-large);
    margin-bottom: var(--gap-sm);
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
    height: calc(var(--ip-big-h)*1.2);
    overflow-y: scroll;
    padding: var(--gap-sm);
    font-size: var(--fz-sm);
    line-height: 1.2;
    background: var(--white);
`;
const CloseCheckbox = styled.span`
    position: absolute;
    right: 30px; top: 30px;
    font-size: var(--fz-large);
    color: var(--night);
    cursor: pointer;
    @media (max-width: 768px){
        right: 15px; top: 15px;
    }
`;


const Join = ({ userData, setUserData }) => {
    const [ userInfo, setUserInfo ] = useState({
        id: '',
        field: '',
        pw: '',
        pwConfirm: '',
        contentLst: []
    })
    // 회원가입시 contentLst 초기화 해두기
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
        const { id ,pw, field, contentLst } = userInfo
        if (isIncorrect || checkUserData()) {
        // 회원가입 반려
            alert('중복된 Id 이거나 비밀번호가 유효하지 않습니다.')
        } 
        else if (checkItems.length === privateData.length && !checkUserData()) {
            // userData.push({
            //     id,
            //     field,
            //     pw
            // })
            const updatedUserData = [...userData, {
                id,
                field,
                pw,
                contentLst
            }]
            localStorage.setItem('userData', JSON.stringify(updatedUserData))
            setUserData(JSON.parse(localStorage.getItem('userData')))
            initState()
            navigate('/login')
        }
    }
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
    const ClosePopup = ()=>{
        setCheckPopup(false)
        setCheckItems([])
    }

    const privateData = [
        {
            id:0, 
            label: '이용약관 동의1',
            text: `여러분을 환영합니다.
            커비의 당근 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 커비의 당근 서비스의 이용과 관련하여 커비의 당근 서비스를 제공하는 커비캐럿 주식회사(이하 ‘커비캐럿’)와 이를 이용하는 커비의 당근 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 커비의 당근 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            커비의 당근 서비스를 이용하시거나 커비의 당근 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
            다양한 커비의 당근 서비스를 즐겨보세요.`
        },
        {
            id:1, 
            label: '이용약관 동의2',
            text: `여러분을 환영합니다.
            커비의 당근 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 커비의 당근 서비스의 이용과 관련하여 커비의 당근 서비스를 제공하는 커비캐럿 주식회사(이하 ‘커비캐럿’)와 이를 이용하는 커비의 당근 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 커비의 당근 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            커비의 당근 서비스를 이용하시거나 커비의 당근 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
            다양한 커비의 당근 서비스를 즐겨보세요.`
        },
        {
            id:2, 
            label: '이용약관 동의3',
            text: `여러분을 환영합니다.
            커비의 당근 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 커비의 당근 서비스의 이용과 관련하여 커비의 당근 서비스를 제공하는 커비캐럿 주식회사(이하 ‘커비캐럿’)와 이를 이용하는 커비의 당근 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 커비의 당근 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            커비의 당근 서비스를 이용하시거나 커비의 당근 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
            다양한 커비의 당근 서비스를 즐겨보세요.`
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
            <ModalWrap>
                <ModalBack />
                <ModalContent height='80vh'>
                    <CloseCheckbox onClick={ClosePopup}>&times;</CloseCheckbox>
                    <PrivateBox>
                        <PrivateCheck type='checkbox' id='privateCheckAll' onChange={(event) => {
                            handleAllCheck(event.target.checked)}}
                            checked={checkItems.length === privateData.length ? true : false}
                        />
                        <PrivateLabel htmlFor='privateCheckAll'>약관 전체 동의</PrivateLabel>
                    </PrivateBox>
                    {
                        privateData.map((data, id) => {
                            return (
                                <PrivateBox key={id}>
                                <PrivateCheck type='checkbox' id={`ip${id}`} onChange={(event) => {
                                    handleSingleCheck(event.target.checked, data.id)}}
                                    checked={checkItems.includes(data.id) ? true : false}/>
                                <PrivateLabel htmlFor={`ip${id}`} >{data.label}</PrivateLabel>
                                <PrivateTextarea>{data.text}</PrivateTextarea>
                            </PrivateBox>)
                        })
                    }
                    <BaseButton className={checkItems.length === privateData.length ? 'active' : 'deactive'} onClick={checkClick} marginTop={'var(--gap-sm)'}>개인정보동의완료</BaseButton>
                </ModalContent>
            </ModalWrap>
        )
    }



    return (
        <div className='wrap'>
            <FormCenter action='' method='get' onSubmit={handleUserData}>
                <BaseInputBox>
                    <BaseInput type='text' title='joinId' id='joinId' onChange={handleIdInput('id')} value={userInfo.id} required />
                    <BaseLabel htmlFor='joinId'>아이디</BaseLabel>
                </BaseInputBox>
                <BaseInputBox>
                    <BaseInput type='text' title='joinField' id='joinField' onChange={handleIdInput('field')} value={userInfo.field} required />
                    <BaseLabel htmlFor='joinField'>닉네임</BaseLabel>
                </BaseInputBox>
                <BaseInputBox>
                    <BaseInput type='password' title='joinPw' id='joinPw' onChange={handleIdInput('pw')} value={userInfo.pw} required />
                    <BaseLabel htmlFor='joinPw'>비밀번호</BaseLabel>
                </BaseInputBox>
                <BaseInputBox>
                    <BaseInput type='password' title='joinPwConfirm' id='joinPwConfirm' onChange={handleIdInput('pwConfirm')} value={userInfo.pwConfirm} required />
                    <BaseLabel htmlFor='joinPwConfirm'>비밀번호 확인</BaseLabel>
                </BaseInputBox>
                <BaseInputBox><div style={{color:'var(--white)'}}>{isIncorrect ? '비밀번호가 같지 않습니다.' : '' }</div></BaseInputBox>
                <BaseButton type='submit' onClick={checkClick} >{checkItems.length === privateData.length ? '가입하기' : '개인정보동의'}</BaseButton>
            </FormCenter>
            {
                checkPopup ? <PrivateData/> : null
            }
        </div>
    )
}

export default Join