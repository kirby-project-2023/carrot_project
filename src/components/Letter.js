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
`

const Letter = ({openModalHandler}) => { // 모달 창 열고 닫는거 인자로 받기
    return (
        <>
            <ModalBackdrop>
                <ModalView>
                    <NickName>
                        저쩌구
                    </NickName>
                    <section>
                        <Content>
                            어쩌구
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