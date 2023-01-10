import React from 'react'
import styled from 'styled-components'

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
    justify-content: center;
    background-color: var(--night);
`;

const LetterArea = styled.div`
    display: flex;
    flex-wrap : wrap;
    justify-content: center;
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
`

const Mypage = ({ userInfo, dummyData }) => {
    return (
        <div className='wrap'>
            <MypageDiv>
                <div>짜잔 테스트 {userInfo[0].field}네 당근밭</div>
                <LetterArea>
                    {userInfo[0].contentLst.map(el => {
                        return <CarrotBtn key={el}>{el}</CarrotBtn>
                    })}
                </LetterArea>
            </MypageDiv>
        </div>
    )
}

export default Mypage