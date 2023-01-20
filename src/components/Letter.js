import styled from 'styled-components'
import { SmallButton } from '../styles/style';


const ModalBackdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
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
    padding: var(--gap-large);
    word-break: keep-all;
    background-color: var(--maincolor);
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: var(--fz-big);
    overflow: hidden;
    border-radius: var(--bd-rd-big);
    > section {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
    }
    @media (max-width: 768px){
        width: 80%;
        padding: var(--gap-sm);
    }
`;
const Content = styled.div`
    margin: var(--gap-sm);
    width: 90%;
    height: 80%;
    border-radius: var(--bd-rd-big);
    background-color: white;
    overflow-y: auto;
    padding: var(--gap-big);
    > pre {width: 100%; white-space: pre-wrap; word-wrap: break-word;}
    @media (max-width: 768px){
        font-size: var(--fz-md); line-height: 1.2;
    }
`
const NickName = styled.div`
    font-size: var(--fz-large);
    border-radius: var(--bd-rd-big);
    color: white;
    @media (max-width: 768px){
        font-size: var(--fz-big);
    }
`

const Letter = ({openModalHandler, dummyData, isOpen}) => { // 모달 창 열고 닫는거 인자로 받기
    const arr = dummyData.filter(e=>e.id===isOpen)
    return (
        <>
            <ModalBackdrop onClick={()=>openModalHandler(0)}>
                <ModalView onClick={(event)=> event.stopPropagation()} >
                    <NickName>
                        FROM. {arr[0].nickname}
                    </NickName>
                    <section>
                        <Content>
                            <pre>
                                {arr[0].content}
                            </pre>
                        </Content>
                    </section>
                    <SmallButton 
                    onClick={()=>openModalHandler(0)} hoverBg='var(--green)'>확인</SmallButton>
                </ModalView>
            </ModalBackdrop>
        </>
    )
}

export default Letter