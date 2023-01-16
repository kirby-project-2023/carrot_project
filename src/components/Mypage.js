import React, { useState } from 'react'
import styled from 'styled-components'
import Letter from './Letter';
import carrot from '../img/carrot.png';
import carrot_ground from '../img/carrot_in_ground.png';
import gold_carrot from '../img/gold_carrot.png';
import gold_carrot_ground from '../img/gold_carrot_ground.png';

//닉네임네 당근밭 띄우기
// 아이디에 맞는 편지 밭에 뿌리기
// 당근 누르면 편지 뜨게 하기 -> map? 모르겠숴요
// Mypage에는 버튼이 나와 있고 버튼을 누르면 Letters라는 컴포넌트가 뜨게 어떻게 하지...?
// 모달로 Letters 컴포넌트를 띄우자
//[{"id": "Kirby","pw": "qwe123","field": "커비","contentLst": [1,2,3,4,5,6,7]}]

const MypageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--night);
`;

const TitleDiv = styled.div`
    font-size: var(--fz-large);
    color: var(--white);
    margin: var(--gap-big);
`

const NothingDiv = styled.div`
    font-size: var(--fz-large);
`

const LetterArea = styled.div`
    display: flex;
    background-color: var(--ground);
    flex-wrap : wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 70vh;
    border-radius: var(--bd-rd-big);
`

const CarrotImg = styled.img`
    width: var(--btn-sm-w);
    height: var(--btn-sm-w);
    margin: var(--gap-big);
    cursor: pointer;
`

const Mypage = ({ userInfo, dummyData }) => {
    // const [isClicked, setIsClicked] = useState(false)
    const [isOpen, setIsOpen] = useState('')
    const [clicked, setClicked] = useState([])
    const openModalHandler = (el) => {
        console.log(el)
        setIsOpen(el)
    }
    if (userInfo.length === 0) {
        userInfo = JSON.parse(localStorage.getItem('userInfo'))
    }

    const clickColorChange = (target) => {
        setClicked([...clicked, target]);
    }

    const data = userInfo[0].contentLst.map(el=>{
        return dummyData[el-1]}
    )

    const max = data.map(el=>el.content.length);
    const maxNum = Math.max(...max)
    const longLetter = max.indexOf(maxNum); //longletter는 가장 긴 편지의 인덱스

    return (
        <div className='wrap'>
            <MypageDiv>
                <TitleDiv>2023 {userInfo[0].field} 달토끼네 당근밭</TitleDiv>
                <LetterArea>
                    {userInfo[0].contentLst.length === 0 ?
                    // 회원 가입한 유저 데이터에 contentLst 속성을 빈 배열로 초기화해둬서 분기 조건 수정했습니다. - 혜림
                        <NothingDiv>친구들에게 당근을 요청하세요!</NothingDiv>
                        : userInfo[0].contentLst.map(el => {
                            return <>
                                {/*지금은 className으로 삼항 연산자를 썼는데, 이미지로 하려면 CarrotBtn자체에서 삼항 연산자*/}
                                {clicked.includes(el)
                                    ? ((longLetter+1) === el
                                    ? <CarrotImg src={gold_carrot} alt='gold_carrot'onClick={() => {openModalHandler(el); clickColorChange(el)}} key={el}/>
                                    : <CarrotImg src={carrot} alt='carrot' onClick={() => {openModalHandler(el); clickColorChange(el)}} key={el}/>)
                                    : ((longLetter+1) === el
                                    ? <CarrotImg src={gold_carrot_ground} alt='gold_carrot_ground'onClick={() => {openModalHandler(el); clickColorChange(el)}} key={el}/>
                                    : <CarrotImg src={carrot_ground} alt="carrot_ground" onClick={() => {openModalHandler(el); clickColorChange(el)}} key={el}/>)
                                }
                                {isOpen === el ? <Letter openModalHandler={openModalHandler} dummyData={dummyData} isOpen={isOpen}></Letter> : null}
                            </>
                        })}
                </LetterArea>
            </MypageDiv>
        </div>
    )
}

export default Mypage