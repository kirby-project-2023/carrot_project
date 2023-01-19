import { useState } from 'react'
import styled from 'styled-components'
import { SmallButton } from '../styles/style';
import { ModalBack, ModalContent } from '../styles/style';
import app_logo from '../img/app_logo2.png'
import { clear } from '@testing-library/user-event/dist/clear';

const ModalButton = styled.button`
    position: absolute;
    right: 0px;
    bottom: 0px;
    width:50px;
    height: 50px;
    font-size: var(--fz-large);
    color: var(--black);
    border: 1px solid white;
    border-radius: 50%;
    margin: 0 10px 10px 0;
    background-color: var( --white);
    cursor: pointer;
    @media (max-width: 768px){
        bottom: 40px;
        width: 30px; height: 30px;
        font-size: var(--fz-big);
    }
`
const ModalContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const ModalBox = styled.div`
    width: 100%; height: 80%; overflow-y: auto;
    > img {display: block; margin: 0 auto var(--gap-md);}
    > div {margin-bottom: var(--gap-big); text-align: center;}
    > ul li {display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: calc(var(--gap-sm)/2);}
    > ul li * {line-height: 1.3;}
    > ul li span {padding-right: calc(var(--gap-sm)/2);}
    > ul li em {color: var(--maincolor);}
    @media (max-width: 768px){
        height: 80%; margin-bottom: var(--gap-md);
        > ul li {font-size: var(--fz-sm);}
    }
`;

const Help = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModalHandler = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <ModalContainer>
                <ModalButton
                    onClick={openModalHandler}
                >
                    ?
                </ModalButton>
                {isOpen ?
                    <ModalBack onClick={openModalHandler} >
                        <ModalContent className='modal-content' onClick={(event)=> event.stopPropagation()}>
                            <ModalBox>
                                <img src={app_logo} width='150px' alt='당근' />
                                <div>
                                    <p>2023년이 검은 토끼의 해인 것을 알고 계신가요?</p>
                                    <p>토끼🐰가 좋아하는 당근 밭을 일구고, <br/>소중한 친구에게 응원의 메세지를 보내주세요.</p>
                                    <p>나만의 당근 밭을 만들어 친구에게 당근을 받아 보세요!</p>
                                </div>
                                <ul>
                                    <li><span>🥕</span> <p><em>회원 가입</em>을 완료하세요. 당신의 당근 밭이 생길 거예요.</p></li>
                                    <li><span>🥕</span> <p>친구가 당근을 보내줄 수 있도록 <em>당근 밭 주소</em>를 친구에게 공유하세요.</p></li>
                                    <li><span>🥕</span> <p>친구가 당근 보내면 내 당근 밭에 <em>새로운 당근</em>이 생겨요.</p></li>
                                    <li><span>🥕</span> <p>당근을 수확하면 <em>친구의 편지</em>를 확인할 수 있어요 !</p></li>
                                    <li><span>🥕</span> <p>달에 사는 토끼는 내 당근밭을 지켜보고 있어요. 당근 수에 따라 <em>달라지는 달</em>을 살펴보세요.</p></li>
                                    <li><span>🥕</span> <p><em>친구의 밭</em>에 놀러가서 당근을 심어주세요.</p></li>
                                    <li><span>🥕</span> <p>정성을 가득 담으면 내가 심은 당근이 <em>특별한 당근</em>이 됩니다. 주인공이 되어보세요 !</p></li>
                                </ul>
                            </ModalBox>
                            <SmallButton onClick={openModalHandler}>확인</SmallButton>
                        </ModalContent>
                    </ModalBack> : null
                }
            </ModalContainer>
        </>
    )
}

export default Help
