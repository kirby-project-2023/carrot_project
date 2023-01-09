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
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.371);
  display:flex;
  align-items: center;
  justify-content: center;
`;

const ModalView = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;
    display:flex;
    align-items: center;
    justify-content: center;
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
                    <ModalBackdrop>
                        <ModalView>
                            <button onClick={openModalHandler}>확인</button>
                        </ModalView>
                    </ModalBackdrop> : null
                }
            </ModalContainer>
        </>
    )
}

export default Help
