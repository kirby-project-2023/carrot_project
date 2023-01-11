import React, { useState } from 'react'
import styled from 'styled-components'
import Letter from './Letter';

//닉네임네 당근밭 띄우기
// 아이디에 맞는 편지 밭에 뿌리기
// 당근 누르면 편지 뜨게 하기 -> map? 모르겠숴요
// Mypage에는 버튼이 나와 있고 버튼을 누르면 Letters라는 컴포넌트가 뜨게 어떻게 하지...?
// 모달로 Letters 컴포넌트를 띄우자
//[{"id": "Kirby","pw": "qwe123","field": "커비","contentLst": [1,2,3,4,5,6,7]}]

const MypageDiv = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--night);
`;

const TitleDiv = styled.div`
    font-size: var(--fz-large);
    color: var(--white);
`

const NothingDiv = styled.div`
    font-size: var(--fz-large);
`

const LetterArea = styled.div`
    display: flex;
    background-color: var(--white);
    flex-wrap : wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 70vh;
`

const CarrotBtn = styled.button`
    background-color: var(--carrot);
    color: #fff;
    font-size: var(--fz-big);
    font-family: var(--font-gangwon);
    width: var(--btn-sm-w);
    height: var(--btn-sm-w);
    border-radius: 50%;
    border-style: none;
    margin: var(--gap-big);
    cursor: pointer;
    &.clicked {
        background-color: var(--green);
    }
`

const Mypage = ({ userInfo, dummyData }) => {
    // const [isClicked, setIsClicked] = useState(false)
    const [isOpen, setIsOpen] = useState('')
    const openModalHandler = (el) => {
        setIsOpen(el)
    }
    // const clickColorChange = () => {
    //     // event target을 써야 한번에 바뀌는 불상사가 없을 것 같은데...
    //     // 현재 상태 -> 누르면 모든 버튼의 색이 바뀌어버림...
    //     // Letters의 닫기 버튼에 핸들러 함수를 적용해서 isClicked라는 상태를 걔가 관리하게 해서 하면 동시에 적용되는 일이 없지 않을까요?(나중에 건의 드리면 좋겠다)
    //     setIsClicked(true);
    // }

    return (
        <div className='wrap'>
            <MypageDiv>
                <TitleDiv>2023 {userInfo[0].field} 달토끼네 당근밭</TitleDiv>
                <LetterArea>
                    {userInfo[0].contentLst === undefined ? 
                    <NothingDiv>친구들에게 당근을 요청하세요!</NothingDiv>
                    : userInfo[0].contentLst.map(el => {
                        return <>
                        <CarrotBtn onClick={() => openModalHandler(el)} key={el}>{el}</CarrotBtn>
                        {isOpen === el ? <Letter openModalHandler={openModalHandler} ></Letter> : null}
                    </>
                    })}
                </LetterArea>
            </MypageDiv>
        </div>
    )
}

export default Mypage