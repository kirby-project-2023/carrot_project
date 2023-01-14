import { useState } from 'react'
import styled from 'styled-components'
import { SmallButton } from '../styles/style';


const ModalButton = styled.button`
    position: absolute;
    right: 0px;
    bottom: 0px;
    z-index: 100;
    width:50px;
    height: 50px;
    font-size: var(--fz-large);
    color: var(--black);
    border: 1px solid white;
    border-radius: 50%;
    margin: 0 10px 10px 0;
    background-color: var( --white);
    cursor: pointer;
`
const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.371);
  display:flex;
  align-items: center;
  justify-content: center;
`;

const ModalView = styled.div`
    width: 30%;
    height: 50%;
    background-color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: var(--fz-big);
    overflow: hidden;
    border-radius: var(--bd-rd-big);
    > section {
        height: 90%;
    } 
`;
const Content = styled.p`
    margin: var(--gap-sm);
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
                    <ModalBackdrop onClick={openModalHandler} >
                        <ModalView onClick={(event)=> event.stopPropagation()}>
                            <section>
                                <Content>
                                    어쩌구
                                </Content>
                            </section>
                            <SmallButton onClick={openModalHandler}>확인</SmallButton>
                        </ModalView>
                    </ModalBackdrop> : null
                }
            </ModalContainer>
        </>
    )
}

export default Help
