import { useState } from 'react'
import styled from 'styled-components'
import { SmallButton } from '../styles/style';
import { ModalBack, ModalContent } from '../styles/style';
import app_logo from '../img/app_logo2.png'

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
        bottom: 10px;
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

const Content = styled.p`
    margin: var(--gap-large);
    font-size: var(--fz-md);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

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
                        <ModalContent onClick={(event)=> event.stopPropagation()} height={'max-content'} width={'60%'}>
                            <section>
                                <Content>
                                    <img src={app_logo} width='150px' style={{position: 'relative', margin: '0 30%'}}/>
                                    <p>2023년이 검은 토끼의 해인 것을 알고 계신가요?</p>
                                    <p>토끼🐰가 좋아하는 당근 밭을 일구고, 소중한 친구에게 응원의 메세지를 보내주세요.</p>
                                    <p>나만의 당근 밭을 만들어 친구에게 당근을 받아 보세요 !</p>
                                    <br/>
                                    <p>🥕 회원 가입을 완료하세요. 당신의 당근 밭이 생길 거에요.</p>
                                    <p>🥕 친구가 당근을 보내줄 수 있도록 당근 밭 주소를 친구에게 공유하세요.</p>
                                    <p>🥕 친구가 당근 보내면 내 당근 밭에 새로운 당근이 생겨요.</p>
                                    <p>🥕 당근을 수확하면 친구의 편지를 확인할 수 있어요 !</p>
                                    <p>🥕 달에 사는 토끼는 내 당근밭을 지켜보고 있어요. 당근 수에 따라 달라지는 달을 살펴보세요</p>
                                    <p>🥕 친구의 밭에 놀러가서 당근을 심어주세요.</p>
                                    <p>🥕 정성을 가득 담으면 내가 심은 당근이 특별한 당근이 됩니다. 주인공이 되어보세요 !</p>
                                    <p></p>
                                </Content>
                            </section>
                            <SmallButton onClick={openModalHandler}>확인</SmallButton>
                        </ModalContent>
                    </ModalBack> : null
                }
            </ModalContainer>
        </>
    )
}

export default Help
