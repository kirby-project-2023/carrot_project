import styled from 'styled-components'
import { SmallButton } from '../styles/style';


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
const NickName = styled.div`
    margin-top: var(--gap-big);
`

const Letter = ({openModalHandler, dummyData, isOpen}) => { // 모달 창 열고 닫는거 인자로 받기
    const arr = dummyData.filter(e=>e.id===isOpen)
    return (
        <>
            <ModalBackdrop>
                <ModalView>
                    <NickName>
                        FROM. {arr[0].nickname}
                    </NickName>
                    <section>
                        <Content>
                            {arr[0].content}
                        </Content>
                    </section>
                    <SmallButton 
                    onClick={()=>openModalHandler(0)}>확인</SmallButton>
                </ModalView>
            </ModalBackdrop>
        </>
    )
}

export default Letter