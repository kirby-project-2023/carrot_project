import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Letter from './Letter';
import carrot from '../img/carrot.png';
import carrot_ground from '../img/carrot_in_ground.png';
import gold_carrot from '../img/gold_carrot.png';
import gold_carrot_ground from '../img/gold_carrot_ground.png';

const MypageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: var(--night); */
    width: 100%;
    height: 100%;
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
    height: 80%;
    border-radius: var(--bd-rd-big);
`

const CarrotImg = styled.img`
    width: var(--btn-sm-w);
    height: var(--btn-sm-w);
    margin: var(--gap-big);
    cursor: pointer;
    @media (max-width: 540px){
    width: 50px;
    height: 50px;
    }
`

const Mypage = ({ userInfo, dummyData }) => {
    const [isOpen, setIsOpen] = useState('')
    // localstorage에서 clicked를 가져옴
    // localstorage에 clicked가 있을 때는(이미 편지 몇 개 읽은 상태에서 새로고침) 그 값을 상태의 초기값으로 사용
    // localstorage에 clicked가 없을 때는(편지 안 읽었는데 렌더링이 되는 상태) 빈 배열을 상태의 초기값으로 사용
    const [clicked, setClicked] = useState(() => {
        const clickedData = localStorage.getItem("clicked");
        if (clickedData !== null) {
            return JSON.parse(clickedData);
        } else {
            return [];
        }
    })

    // 처음 렌더링될 때 clicked를 localstorage에서 가져온 clicked 값으로 사용 -> 밑에 삼항 연산자에서 사용
    useEffect(() => {
        const clickData = localStorage.getItem("clicked")
        if (clickData) {
            setClicked(JSON.parse(clickData))
        }
    }, []);

    // clicked 상태가 바뀔 때마다 localstorage에 바뀐 clicked값을 저장
    useEffect(() => {
        localStorage.setItem("clicked", JSON.stringify(clicked))
    }, [clicked]);

    const openModalHandler = (el) => {
        console.log(el)
        setIsOpen(el)
    }
    // 최종완성 때 주석 지우기!
    // if (userInfo.length === 0) {
    //     userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // }

    // localstorage에 해당하는 값이 없을 때만 clicked를 target을 새로 추가한 상태로 변경
    // useEffect에 따라 localstorage에 알아서 담김
    const clickColorChange = (target) => {
        let storageData = JSON.parse(localStorage.getItem("clicked"));
        if (!storageData.includes(target)) {
            setClicked([...clicked, target]);
        } else {
            setClicked(clicked)
        }
    }

    const data = userInfo[0].contentLst.map(el => {
        return dummyData[el - 1]
    }
    )

    const max = data.map(el => el.content.length);
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
                                    ? ((longLetter + 1) === el
                                        ? <CarrotImg src={gold_carrot} alt='gold_carrot' onClick={() => { openModalHandler(el); clickColorChange(el) }} key={el} />
                                        : <CarrotImg src={carrot} alt='carrot' onClick={() => { openModalHandler(el); clickColorChange(el) }} key={el} />)
                                    : ((longLetter + 1) === el
                                        ? <CarrotImg src={gold_carrot_ground} alt='gold_carrot_ground' onClick={() => { openModalHandler(el); clickColorChange(el) }} key={el} />
                                        : <CarrotImg src={carrot_ground} alt="carrot_ground" onClick={() => { openModalHandler(el); clickColorChange(el) }} key={el} />)
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