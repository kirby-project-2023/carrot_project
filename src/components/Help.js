import { useState } from 'react'
import styled from 'styled-components'

const ModalButton = styled.button`
    width: 100px;
    height: 100px;
`
const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
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
