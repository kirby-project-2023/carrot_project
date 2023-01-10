import { useState } from 'react'
import styled from 'styled-components'

const ModalButton = styled.button`
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
    > button {
        height: 10%;
        width: var(--btn-sm-w);
        background-color: var(--maincolor);
        border-radius: var(--bd-rd-big);
        margin-bottom: var(--gap-sm);
        cursor: pointer;
        //hover 색상 추가해도 되는지 확인하기(마음대로 추가해도 되는지) 
        :hover{
            background-color: var(--green);
        }
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
                            <button onClick={openModalHandler}>확인</button>
                        </ModalView>
                    </ModalBackdrop> : null
                }
            </ModalContainer>
        </>
    )
}

export default Help
